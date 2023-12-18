import {ToFormProps} from "../../src/utils/toForm";

export interface InFormProps {
  [key: string]: any | any[]
}

const InForm = (obj: InFormProps | undefined): FormData => {
  const form = new FormData();
  const forAppend = (props: {obj: ToFormProps | undefined, isArray: boolean, keyArray?: string}) => {
    const {obj, isArray, keyArray} = props;

    if(isArray && Array.isArray(obj)){
      for(let i: number = 0; i < obj.length; i++){
        const keyForm: string = `${keyArray}[${i}]`;
        const val = obj[i];
        const checkArray: boolean  = Array.isArray(obj[i]);

        typeof val === "object" ? forAppend({obj: val, isArray: checkArray, keyArray: keyForm}) : form.append(keyForm, val);
      }
    } else {
      for (let key in obj){
        const checkArray: boolean  = Array.isArray(obj[key]);
        const keyForm: string = !!keyArray ? `${keyArray}[${key}]` : key;

        checkArray ?
          forAppend({obj: obj[key], isArray: checkArray, keyArray: keyForm}) :
          form.append(keyForm, obj[key]);
      }
    }
  }

  forAppend({obj, isArray: Array.isArray(obj)})

  return form;
}

export {InForm}