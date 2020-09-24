import React from "react";

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
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};
