import React, { type FC } from "react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label: FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="font-bold mb-1">
      {children}
    </label>
  );
};

export default Label;
