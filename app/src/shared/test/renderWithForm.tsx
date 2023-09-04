import {render} from "@testing-library/react";
import {FC, ReactNode} from "react";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";

const RenderWithForm = (component: ReactNode, {defaultValues}: {defaultValues: {[key: string]: string}}) => {
  const Form: FC = () => {
    const onSubmit: SubmitHandler<any> = (data:any) => {}
    const methods = useForm({
      defaultValues,
    });

    return <FormProvider {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmit)} data-testid="form">
        {component}
      </form>
    </FormProvider>
  }

  return render(<Form/>)
}

export default RenderWithForm;