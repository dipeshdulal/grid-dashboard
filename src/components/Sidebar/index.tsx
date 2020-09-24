import React from "react";
import "./sidebar.scss";

import { MenuHeading } from "../MenuHeading";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={`sidebar ${className || ""}`}>
      <h3>
        SOAX.
        <span style={{ color: "var(--color-blue-2)", textAlign: "center" }}>
          com
        </span>
      </h3>
      <div style={{ width: "100%" }}>
        <MenuHeading>Manage</MenuHeading>
        
      </div>
    </div>
  );
};
