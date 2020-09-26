import React from "react";
import "./sidebar.scss";

import { MenuItems } from "../MenuItems";
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
        <MenuItems
          items={[
            { link: "facebook.com", name: "Facebook" },
            { link: "twitter.com", name: "Twitter" },
            { link: "instagram.com", name: "Instagram" },
            { link: "linkedin.com", name: "Linked-In" },
          ]}
        />

        <MenuHeading>Country</MenuHeading>
        <MenuItems
          items={[
            { link: "instagram.com", name: "Nepal" },
            { link: "linkedin.com", name: "India" },
            { link: "twitter.com", name: "America" },
            { link: "facebook.com", name: "Japan" },
          ]}
        />
      </div>
    </div>
  );
};
