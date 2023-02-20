import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  label?: string;
  icon?: JSX.Element;
  loading?: boolean;
  onClick?: any;
}
const CustomButton: FC<ButtonProps> = ({
  id,
  label,
  icon,
  loading,
  onClick,
  ...props
}) => {
  return (
    <button
      id={id}
      className={`${
        loading && "bg-gray-700 cursor-not-allowed"
      }`}
      disabled={loading}
      onClick={onClick}
      {...props}
    >
      {icon} {label}
    </button>
  );
};

export default CustomButton;
