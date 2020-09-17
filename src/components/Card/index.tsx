import React from "react";
import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDotCircle,
  faPlay,
  faPause,
  faLock,
  faWifi,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

type StatusType = "ACTIVE" | "PAUSE" | "BLOCKED";

interface CardProps {
  id: number;
  status: StatusType;
  isActive?: boolean;
  countries: Array<{ name: string; traffic: string }>;
  ips: string[];
  paidTo: string;
  amount: string;
}

const getIcon = (status: StatusType): IconDefinition => {
  if (status === "ACTIVE") {
    return faPlay;
  }
  if (status === "PAUSE") {
    return faPause;
  }
  return faLock;
};

export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="card">
      <p className="heading">
        <span>ID {props.id}</span>
        <button className={props.status}>
          <FontAwesomeIcon icon={getIcon(props.status)}/>
          {props.status}
        </button>
        <FontAwesomeIcon icon={faDotCircle} />
      </p>
      <table>
        <tr>
          <th>COUNTRY</th>
          <th>
            TRAFFIC BY <span>DAY</span>
          </th>
        </tr>
        {props.countries.map((c) => (
          <tr key={c.name}>
            <td><FontAwesomeIcon icon={faWifi} /> {c.name}</td>
            <td>{c.traffic}</td>
          </tr>
        ))}
      </table>
      <p className="chips">
        {props.ips.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </p>
      <p className="paidTo">
        <span>PAID TO</span>
        <span>{props.paidTo}</span>
        <span>{props.amount}</span>
      </p>
    </div>
  );
};
