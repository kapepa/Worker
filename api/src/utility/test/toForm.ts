interface ToFormProps {
  [key: string]: any
}

export const ToForm: ToFormProps = (obj) => {
  const form: FormData = new FormData();
  for(let key in obj) form.append(key, obj[key]);
  return form;
}