import { Button } from "@blueprintjs/core";
import React from "react";

export default function Home() {
  return (
    <div>
      <div style={{ margin: "50px 100px" }}>
        <h1 className="bp4-heading" style={{ width: "60%" }}>
          90% of Canadian businesses experienced a cyber attack in 2022
        </h1>
        <br />
        <h3 className="bp4-heading">Don't be another statistic</h3>
        <br />
        <Button intent="success">Learn more</Button>
      </div>
    </div>
  );
}
