import {FC, memo} from "react";
import "./FormComment.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useSelector} from "react-redux";
import {GetFormComment} from "../../selectors/getFormComment/getFormComment";
import {SubmitHandler, useForm} from "react-hook-form";
import {FormConstructor, FormFieldsTypeComment} from "../../../../widgets/FormConstructor";
import {IFormCommentFormInput} from "../../model/interface/IFormCommentFormInput";
import {useTranslation} from "react-i18next";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";

interface FormCommentProps {
  className?: string,
}

const FormComment: FC<FormCommentProps> = memo(({className}) => {
  const {t} = useTranslation("comments");
  const fields: FormFieldsTypeComment[] = [
    {
      label: "label",
      name: "comment",
      type: "text",
      placeholder: "Placeholder",
      validation: { required: {value: true, message: "required"}, minLength: { value: 3, message: "minLength" } }
    }
  ];
  const { loading, text, error } = useSelector(GetFormComment);
  const { register, handleSubmit, formState } = useForm<IFormCommentFormInput>({ defaultValues: {comment: text} })
  const onSubmit: SubmitHandler<IFormCommentFormInput> = (data: IFormCommentFormInput) => console.log(data);

  return (
    <div className={ClassNames("form-comment", className)} data-testid="form-comment">
      {!!error && <Text theme={TextTheme.ERROR} title={t("error-save")} />}
      <FormConstructor
        disabled={loading}
        onSubmit={handleSubmit(onSubmit)}
        submitText={t("send-comment")}
        fieldsName={fields}
        register={register}
        formState={formState}
      />
    </div>
  )
});

export { FormComment };

