import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { PiPackageLight } from "react-icons/pi";

function Package() {
  return (
    <div className="fourContainer">
    <Handle type="target" position={Position.Right} />
    <div className="fourContent">
      <div>
        <PiPackageLight className="icon"/>
      </div>
      <p className="name">Package</p>
    </div>
    <Handle type="target" position={Position.Right} id="a"/>
    <Handle type="source" position={Position.Top } id="b"/>
    
  </div>
  )
}

export default Package