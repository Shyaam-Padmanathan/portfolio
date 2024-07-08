import React from "react";
import Typewriter from "typewriter-effect";
import { TyperMessages } from "../../helper/constant";

function Type() {
  return (
    <div style={{fontFamily: '"Consolas", monospace'}}>
    <Typewriter
      options={{
        strings: TyperMessages,
        autoStart: true,
        loop: true,
        cursor:'_',
        deleteSpeed: 50,
      }}
    />
    </div>
  );
}

export default Type;
