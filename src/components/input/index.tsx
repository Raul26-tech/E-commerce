import { InputForm } from "./style";

interface INformationsProps {
  type?: string;
  placeholder?: string;
  addClassName?: string;
}

export function Input(props: INformationsProps) {
  return (
    <>
        <InputForm 
          type={props.type} 
          placeholder={props.placeholder} 
          className={props.addClassName}
        />
    </>
  );
}
