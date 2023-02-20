import React, { ButtonHTMLAttributes, FC, InputHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  label?: string;
  icon?: JSX.Element;
  loading?: boolean;
  onClick: any;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  placeholder?: string;
  type?: string;
}

const Button: FC<ButtonProps> = ({
  id,
  label,
  icon,
  loading,
  onClick,
  ...props
}) => {
  return (
    <>
      <button
        id={id}
        className={`${loading && "bg-gray-700 cursor-not-allowed"}`}
        disabled={loading}
        onClick={onClick}
        {...props}
      >
        {icon} {label}
      </button>
    </>
  );
};

const Input: FC<InputProps> = ({ id, placeholder, type, ...props }) => {
  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="bg-slate-200 rounded-lg text-black p-2 border focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
        {...props}
      />
    </>
  );
};

const InputIcon: FC<InputProps> = ({ id, placeholder, type, ...props }) => {
  return (
    <>
      <input id={id} type={type} placeholder={placeholder} {...props} />
    </>
  );
};

export { Button, Input, InputIcon };
