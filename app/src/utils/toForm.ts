interface ToFormProps {
  [key: string]: any
}

export function ToForm (obj: ToFormProps): FormData {
  const form = new FormData();
  for (let key in obj) form.append(key, obj[key]);
  return form
}