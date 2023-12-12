export interface InFormProps {
  [key: string]: any | any[]
}

const InForm = (obj: InFormProps | undefined): FormData => {
  const form = new FormData();

  for (const key in obj) {
    form.append(key, obj[key]);
  }

  return form;
}

export {InForm}