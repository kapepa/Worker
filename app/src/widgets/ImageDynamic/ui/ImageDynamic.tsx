import {FC, memo, useCallback, useEffect, useMemo, useState} from "react";
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
  loadImage: (file: File) => void,
  validation: RegisterOptions,
}

const ImageDynamic: FC<ImageDynamicProps> = memo((props: ImageDynamicProps) => {
  const { name, validation, className, classAlert, loadImage} = props;
  const { register, control, formState: { errors }, setValue, getValues, clearErrors } = useFormContext();
  const { ref, onChange, ...reg } = register(name, validation);
  const [ entryImage, setEntryImage] = useState<string | undefined>(undefined);
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

  useEffect(() => {
    console.log(getValues()["blocks"][1]["src"])
    setEntryImage(getValues()[name]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

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