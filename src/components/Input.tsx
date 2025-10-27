import React, { type FC, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = (props) => {
  return (
    <input
      className="p-4 border-1 border-[#1a1a1a] rounded-xl"
      autoComplete="default"
      {...props}
    />
  );
};

export default Input;
