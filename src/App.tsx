import React from "react";
import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        amount="$700.00"
        countries={[
          { name: "United States", traffic: "3.1GB/∞" },
          { name: "Russian Federation", traffic: "6.2GB/∞" },
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
          { name: "United States", traffic: "3.1GB/∞" },
          { name: "China", traffic: "6.2GB/∞" },
        ]}
        ips={["178.124.100.103", "192.60.67.12"]}
        id={7567}
        paidTo="17.12.2018, 19:02"
        status="PAUSE"
        isActive={true}
      />
      <Card
        amount="$700.00"
        countries={[
          { name: "Argentina", traffic: "3.1GB/∞" },
          { name: "China", traffic: "2.97GB/∞" },
        ]}
        ips={["178.124.100.103", "192.60.67.12"]}
        id={7567}
        paidTo="17.12.2018, 19:02"
        status="BLOCKED"
        isActive={false}
      />
    </div>
  );
}

export default App;
