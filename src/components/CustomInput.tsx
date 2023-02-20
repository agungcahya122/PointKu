import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder?: string;
}

const CustomInput = ({ id, placeholder, ...props }: Props) => {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="input input-ghost w-full max-w-full"
      {...props}
    />
  );
};

export default CustomInput;
