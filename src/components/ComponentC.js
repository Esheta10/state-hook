import React, { useContext} from "react";
import ComponentE from "./ComponentE";
import CountContext from "../App"

function ComponentC() {
  return (
    <div>
      <ComponentE />
    </div>
  );
}

export default ComponentC;
