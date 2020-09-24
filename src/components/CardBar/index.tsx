import React from "react";
import { Card } from "../Card";
import "./cardbar.scss";
import { Button } from "../Button";

interface CardBarProps {
  className?: string;
}

export const CardBar: React.FC<CardBarProps> = ({ className }) => {
  return (
    <div className={`cardbar ${className}`}>
      <div className="heading">
        <h3>Packages</h3>
        <Button>Buy Packages</Button>
      </div>
      <Card
        amount="$700.00"
        countries={[
          { name: "United States", traffic: "3.1 GB/∞" },
          { name: "Russian Federation", traffic: "6.2 GB/∞" },
        ]}
        ips={["178.124.100.103", "192.60.67.12"]}
        id={7567}
        paidTo="17.12.2018, 19:02"
        status="ACTIVE"
        isActive={true}
      />
      <Card
        amount="$496.00"
        countries={[
          { name: "United States", traffic: "3.1 GB/∞" },
          { name: "China", traffic: "6.2 GB/∞" },
        ]}
        ips={["178.124.100.103", "192.60.67.12"]}
        id={7567}
        paidTo="17.12.2018, 19:02"
        status="PAUSE"
        isActive={false}
      />
      <Card
        amount="$700.00"
        countries={[
          { name: "Argentina", traffic: "3.1 GB/∞" },
          { name: "China", traffic: "2.97 GB/∞" },
        ]}
        ips={["178.124.100.103", "192.60.67.12"]}
        id={7567}
        paidTo="17.12.2018, 19:02"
        status="BLOCKED"
        isActive={false}
      />
    </div>
  );
};
