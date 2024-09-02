"use client";

import { useEffect } from "react";
import InnerChild from "./InnerChild";

const ChildComponent = ({ name }: { name: string }) => {
  useEffect(() => {
    console.log("ChildComponent created by " + name);
  }, []);
  return (
    <div>
      ChildComponent created by {name}
      <InnerChild />
    </div>
  );
};

export default ChildComponent;
