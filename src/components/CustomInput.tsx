import {
  HtmlHTMLAttributes,
  InputHTMLAttributes,
  FC,
  TextareaHTMLAttributes,
} from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder?: string;
}

export function CustomInput({
  id,
  placeholder,
  ...props
}: Props) {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="bg-slate-200 rounded-lg text-black p-2 border focus:outline-none  focus:ring-1 focus:ring-black"
      {...props}
    />
  );
}

export function InputIcon({ id, placeholder, ...props }: Props) {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="input input-ghost w-full max-w-full"
      {...props}
    />
  );
}

interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export const TextArea: FC<TextAreaProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  ...props
}) => {
  return (
    <div>
      <label>{label}</label>
      <textarea
        id={id}
        className="textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
