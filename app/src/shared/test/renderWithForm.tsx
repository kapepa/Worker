import {render} from "@testing-library/react";
import {FC, ReactNode} from "react";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import i18n from "../config/i18n/i18nForTests";
import {I18nextProvider} from "react-i18next";

const RenderWithForm = (component: ReactNode, {defaultValues}: {defaultValues: {[key: string]: string}}) => {
  const Form: FC = () => {
    const onSubmit: SubmitHandler<any> = (data:any) => {}
    const methods = useForm({
      defaultValues,
    });

    return (
      <I18nextProvider i18n={i18n}>
        <FormProvider {...methods} >
          <form onSubmit={methods.handleSubmit(onSubmit)} data-testid="form">
            {component}
          </form>
        </FormProvider>
      </I18nextProvider>
    )
  }

  return render(<Form/>)
}

export default RenderWithForm;