import {FC, memo} from "react";
import "./FormComment.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useSelector} from "react-redux";
import {GetFormComment} from "../../selectors/getFormComment/getFormComment";
import {SubmitHandler, useForm} from "react-hook-form";
import {FormConstructor, FormFieldsNameType} from "../../../../widgets/FormConstructor";
import {IFormCommentFormInput} from "../../model/interface/IFormCommentFormInput";
import {useTranslation} from "react-i18next";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";

interface FormCommentProps {
  className?: string,
}

const FormComment: FC<FormCommentProps> = memo(({className}) => {
  const {t} = useTranslation("comments");
  const fields: FormFieldsNameType[] = [
    { label: "label", name: "comment", type: "text", placeholder: "Placeholder", errorMessage: "Error" }
  ];
  const { loading, text, error } = useSelector(GetFormComment);
  const { register, handleSubmit, formState: {errors} } = useForm<IFormCommentFormInput>({ defaultValues: {comment: text} })
  const onSubmit: SubmitHandler<IFormCommentFormInput> = (data) => console.log(data);

  return (
    <div className={ClassNames("form-comment", className)} data-testid="form-comment">
      {!!error && <Text theme={TextTheme.ERROR} title={t("error-save")} />}
      <FormConstructor
        disabled={loading}
        onSubmit={handleSubmit(onSubmit)}
        submitText={t("send-comment")}
        fieldsName={fields}
        register={register}
        // errors={errors}
      />
    </div>
  )
});

export { FormComment };

