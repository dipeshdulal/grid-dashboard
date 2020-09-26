import React from "react";
import "./main.scss";
import { Button } from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPause, faGift } from "@fortawesome/free-solid-svg-icons";

interface MainContentProps {
  className?: string;
}

export const MainContent: React.FC<MainContentProps> = ({ className }) => {
  return (
    <div className={`content ${className || ""}`}>
      <div className="content__heading">
        <h3>Package ID 1234</h3>
        <Button>
          <FontAwesomeIcon icon={faPlus} />
          Add IP's
        </Button>
        <Button style={{ backgroundColor: "var(--color-blue-2)" }}>
          <FontAwesomeIcon icon={faPause} />
          Pause
        </Button>
      </div>
      <div className="content__bonus">
        <div className="icon">
          <FontAwesomeIcon icon={faGift} />
        </div>
        <h3>You have a bonus, Anthony!</h3>
        <p>Thanks for using our service. We have a special gift for you 3 days for free</p>
      </div>
    </div>
  );
};
