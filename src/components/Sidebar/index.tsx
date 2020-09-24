import React from "react";
import "./sidebar.scss"

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={`sidebar ${className || ""}`}>
      <h1>Sidebar Contents</h1>
    </div>
  );
};
