import React, { type FC } from "react";
interface GradientTextProps {
  children: React.ReactNode;
}
const gradientText: FC<GradientTextProps> = ({ children }) => {
  return (
    <span
      style={{
        backgroundSize: "200% 200%",
        animation: "gradientMove 3s ease infinite",
      }}
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
    >
      {children}
    </span>
  );
};

export default gradientText;
