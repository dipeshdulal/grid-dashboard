import React from "react";
import "./menuitems.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPassport } from "@fortawesome/free-solid-svg-icons";

interface Item {
  link: string;
  name: string;
}

interface MenuItemsProps {
  items: Item[];
  className?: string;
}

export const MenuItems: React.FC<MenuItemsProps> = ({ items, className }) => {
  return (
    <ul className={`menu-items ${className || ""}`}>
      {items.map((item, idx) => (
        <li key={idx}>
          <a href={item.link}><FontAwesomeIcon icon={faPassport} /> {item.name}</a>
        </li>
      ))}
    </ul>
  );
};
