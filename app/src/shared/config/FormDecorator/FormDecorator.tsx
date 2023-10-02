import {Decorator} from '@storybook/react'
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {FC} from "react";

export const FormDecorator = ({defaultValues}: {defaultValues: {[key: string]: string | string[]}}) => {
  const decorator: Decorator = (Story) => {
    const Form: FC = () => {
      const onSubmit: SubmitHandler<any> = (data: any) => {}
      const methods = useForm({
        defaultValues,
      });

      return <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)} data-testid="form">
          <Story/>
        </form>
      </FormProvider>
    }

    return <Form/>
  };

  return decorator
}