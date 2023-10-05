import {FC, memo, useCallback, useEffect, useMemo, useState} from "react";
import "./ImageDynamic.scss"
import {ClassNames} from "../../../shared/lib/ClassNames";
import {ImageLoader} from "../../../shared/ui/ImageLoader/ImageLoader";
import {useController, useFormContext} from "react-hook-form";
import {RegisterOptions} from "react-hook-form/dist/types/validator";

interface ImageDynamicProps {
  name: string,
  className?: string,
  classAlert?: string,
  loadImage: (file: File) => void,
  validation: RegisterOptions,
}

const ImageDynamic: FC<ImageDynamicProps> = memo((props: ImageDynamicProps) => {
  const { name, validation, className, classAlert, loadImage} = props;
  const { control, setValue, getValues, clearErrors } = useFormContext();
  const { field: {ref, onChange, value, ...otherField}, fieldState } = useController({name, control, rules: validation})
  const [ entryImage, setEntryImage] = useState<string | undefined>(undefined);

  const onChangeImage = useCallback((file: File) => {
    setValue(name, file);
    loadImage(file);
  }, [name, loadImage, setValue]);

  const translateError = useMemo(() => {
    return fieldState.error;
  }, [fieldState.error]);

  useEffect(() => {
    clearErrors(name)
  },[name, clearErrors])

  useEffect(() => {
    setEntryImage(getValues([name][0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className={ClassNames("image-dynamic", className)}>
      <div className="image-dynamic__nested">
        <ImageLoader
          loadImage={onChangeImage}
          entryImage={entryImage}
          {...otherField}
        />
        { !!translateError &&
          <span className={ClassNames("image-dynamic__alert", classAlert)} data-testid="alert">
            {translateError.message}
          </span>
        }
      </div>
    </div>
  )
})

export {ImageDynamic}