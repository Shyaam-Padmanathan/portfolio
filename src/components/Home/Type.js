import React from "react";
import Typewriter from "typewriter-effect";
import { TyperMessages } from "../../helper/constant";

function Type() {
  return (
    <Typewriter
      options={{
        strings: TyperMessages,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
