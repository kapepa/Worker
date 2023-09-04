import {ChangeEvent, FC, memo, useCallback} from "react";
import "./FormComment.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {useDispatch, useSelector} from "react-redux";
import {GetFormComment} from "../../selectors/getFormComment/getFormComment";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {IFormCommentFormInput} from "../../model/interface/IFormCommentFormInput";
import {useTranslation} from "react-i18next";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";
import Button, {ThemeButtonEnum} from "../../../../shared/ui/Button/Button";
import {InputDynamic} from "../../../../widgets/InputDynamic";
import {BgEnum} from "../../../../shared/const/BgEnum";
import {FormCommentActions} from "../../model/slice/formCommentSlice";
import {AppDispatch} from "../../../../app/providers/Store/config/store";

interface FormCommentProps {
  className?: string,
  onSend(str: string): void
}

const FormComment: FC<FormCommentProps> = memo(({className, onSend}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {t} = useTranslation("comments");
  const { loading, text, error } = useSelector(GetFormComment);
  const methods = useForm<IFormCommentFormInput>({ defaultValues: {comment: text} });
  const {changeComment} = FormCommentActions;

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeComment(e.currentTarget.value)),
    [dispatch, changeComment]);

  const onSubmit: SubmitHandler<IFormCommentFormInput> = useCallback(
    (data: IFormCommentFormInput) => {
      onSend(data.comment);
      methods.reset();
    },
    [onSend, methods]
  );

  return (
    <FormProvider {...methods}>
      <div className={ClassNames("form-comment__environment", className)} data-testid="form-comment">
        {!!error && <Text theme={TextTheme.ERROR} title={t("error-save")} />}
        <form className="form-comment" onSubmit={methods.handleSubmit(onSubmit)} data-testid="form">
          <InputDynamic
            name="comment"
            type="text"
            themeInput={BgEnum.BG_COLOR}
            placeholder={t("placeholder.comment")}
            validation={{required: {value: true, message: t("validation.required")}}}
            defaultValue={text}
            classInput="form-comment__input"
            onChange={onChange}
          />
          <div className="form-comment__basement">
            <Button
              className="form-comment__btn"
              theme={ThemeButtonEnum.OUTLINE}
              disabled={loading}
              type="submit"
            >{t("send-comment")}</Button>
          </div>
        </form>
      </div>
    </FormProvider>
  )
});

export { FormComment };

