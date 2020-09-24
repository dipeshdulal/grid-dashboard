import React from "react";
import "./button.scss"

export const Button: React.FC<React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>> = ({ children, className, ...props }) => {
  return (
    <button className={`${className || ""} button`} {...props}>
      {children}
    </button>
  );
};
