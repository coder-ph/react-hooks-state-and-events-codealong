import React from "react";
import { useState } from "react";

function Toggle() {
    const [isOn, setIson] = useState(false)

    function handleClick() {
      setIson((isOn)=> !isOn)
    }
    const color = isOn? 'red': 'green'

  return <button style={{background: color}} onClick={handleClick}>{isOn? 'ON': 'OFF'}</button>;
}

export default Toggle;
