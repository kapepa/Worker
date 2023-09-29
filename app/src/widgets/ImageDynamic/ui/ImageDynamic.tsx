import {FC, memo, useCallback, useEffect, useMemo} from "react";
import "./ImageDynamic.scss"
import {ClassNames} from "../../../shared/lib/ClassNames";
import {ImageLoader} from "../../../shared/ui/ImageLoader/ImageLoader";
import {useFormContext} from "react-hook-form";
import {RegisterOptions} from "react-hook-form/dist/types/validator";
import {ErrorMessage} from "@hookform/error-message/dist";


interface ImageDynamicProps {
  name: string,
  className?: string,
  classAlert?: string,
  entryImage?: string,
  loadImage: (file: File) => void,
  validation: RegisterOptions,
}

const ImageDynamic: FC<ImageDynamicProps> = memo((props: ImageDynamicProps) => {
  const { name, validation, className, classAlert, entryImage, loadImage} = props;
  const { register, formState: { errors }, setValue, clearErrors } = useFormContext();
  const { ref, ...reg } = register(name, validation);
  const toHaveError = errors[name];

  const onChangeImage = useCallback((file: File) => {
    setValue(name, file);
    loadImage(file);
  }, [name, loadImage, setValue]);

  const translateError = useMemo(() => {
    if(name in errors){
      for(let key in validation) if(errors[name]?.type === key) {
        return {[name]: {...errors[name], message: validation[key].message}}
      }
    }
    return errors
  }, [validation, errors, name])

  useEffect(() => {
    clearErrors(name)
  },[name, clearErrors])

  return (
    <div className={ClassNames("image-dynamic", className)}>
      <div className="image-dynamic__nested">
        <ImageLoader
          loadImage={onChangeImage}
          entryImage={entryImage}
          {...reg}
        />
        { !!toHaveError &&
          <span className={ClassNames("image-dynamic__alert", classAlert)} data-testid="alert">
            <ErrorMessage errors={translateError} name={name} />
          </span>
        }
      </div>
    </div>
  )
})

export {ImageDynamic}