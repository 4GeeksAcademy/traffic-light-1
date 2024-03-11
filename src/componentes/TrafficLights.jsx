import { useState } from "react";
import clsx from "clsx";

export function TrafficLights() {
  const [light, setLight] = useState("red");

  const handlerChangeLight = (l) => () => {
    setLight(l);
  };

  return (
    <div className="traffic">
      <div
        className={clsx("red", light === "red" && "glow")}
        onClick={handlerChangeLight("red")}
      />
      <div
        className={clsx("yellow", light === "yellow" && "glow")}
        onClick={handlerChangeLight("yellow")}
      />
      <div
        className={clsx("green", light === "green" && "glow")}
        onClick={handlerChangeLight("green")}
      />
    </div>
  );
}