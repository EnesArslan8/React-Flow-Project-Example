import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { PiPackageLight } from "react-icons/pi";

function Package() {
  return (
    <div className="container">
    <div className="content">
      <div>
        <PiPackageLight className="icon"/>
      </div>
      <p className="name">Package</p>
    </div>
    <Handle type="target" position={Position.Right} />
    <Handle type="target" position={Position.Right} id="a"/>
    <Handle type="source" position={Position.Top } id="b"/>
    
  </div>
  )
}

export default Package