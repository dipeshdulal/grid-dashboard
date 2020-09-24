import React from "react";
import "./main.scss";

interface MainContentProps {
  className?: string;
}

export const MainContent: React.FC<MainContentProps> = ({ className }) => {
  return (
    <div className={`content ${className || ""}`}>
      <h1>MainContent Contents</h1>
    </div>
  );
};
