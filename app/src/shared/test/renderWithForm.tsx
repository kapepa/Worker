import {render} from "@testing-library/react";
import {FC, ReactNode, useMemo} from "react";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import i18n from "../config/i18n/i18nForTests";
import {I18nextProvider} from "react-i18next";
import {StateSchema, StoreProvider} from "../../app/providers/Store";
import {MemoryRouter} from "react-router-dom";

const RenderWithForm = (
  component: ReactNode,
  {defaultValues, preloadedState}: {defaultValues?: {[key: string]: string}, preloadedState?: StateSchema},
) => {
  const Form: FC = () => {
    const onSubmit: SubmitHandler<any> = (data: any) => {}
    const methods = useForm({
      defaultValues,
    });

    const renderNodes = (
      <I18nextProvider i18n={i18n}>
        <FormProvider {...methods} >
          <form onSubmit={methods.handleSubmit(onSubmit)} data-testid="form">
            {component}
          </form>
        </FormProvider>
      </I18nextProvider>
    )

    return preloadedState
      ? (
        <MemoryRouter initialEntries={["/"]}>
          <StoreProvider preloadedState={preloadedState}>
            {renderNodes}
          </StoreProvider>
        </MemoryRouter>
      )
      : (renderNodes);
  }

  return render(<Form/>)
}

export default RenderWithForm;