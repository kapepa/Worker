import {FC, memo} from "react";
import "./FormComment.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useSelector} from "react-redux";
import {GetFormComment} from "../../selectors/getFormComment/getFormComment";
import {SubmitHandler, useForm} from "react-hook-form";
import {FormConstructor, FormFieldsNameType} from "../../../../widgets/FormConstructor";
import {IFormCommentFormInput} from "../../model/interface/IFormCommentFormInput";
import {useTranslation} from "react-i18next";

interface FormCommentProps {
  className?: string,
}

const FormComment: FC<FormCommentProps> = memo(({className}) => {
  const {t} = useTranslation("comments");
  const fields: FormFieldsNameType[] = [{ name: "comment", type: "text" }];
  const { loading, text, error } = useSelector(GetFormComment);
  const { register, handleSubmit } = useForm<IFormCommentFormInput>()
  const onSubmit: SubmitHandler<IFormCommentFormInput> = (data) => console.log(data)

  return (
    <div className={ClassNames("form-comment", className)} data-testid="form-comment">
      <FormConstructor
        disabled={loading}
        onSubmit={ handleSubmit(onSubmit) }
        submitText={t("send-comment")}
        fieldsName={fields}
      />
    </div>
  )
});

export { FormComment };

