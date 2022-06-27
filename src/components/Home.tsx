import { Button } from "@blueprintjs/core";
import React from "react";

export default function Home() {
  return (
    <div>
      <div
        style={{
          // margin: "50px 100px",
          padding: "200px",
          backgroundImage:
            "url('https://cdn.wallpapersafari.com/1/43/u3Q8OK.jpg')",
        }}
      >
        <h1 className="bp4-heading" style={{ width: "50%" }}>
          One in five Canadian businesses experience a cyber attack annually
        </h1>
        <br />
        <h3 className="bp4-heading">Don't be another statistic</h3>
        <br />
        <Button large={true} intent="success">
          Learn more
        </Button>
      </div>
    </div>
  );
}
