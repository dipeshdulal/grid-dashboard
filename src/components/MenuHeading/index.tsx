import React from "react";
import "./menuheader.scss";

interface MenuHeadingProps {
  className?: string;
}

export const MenuHeading: React.FC<MenuHeadingProps> = ({
  children,
  className,
}) => {
  return <p className={`${className || ""} menu-header`}>{children}</p>;
};
