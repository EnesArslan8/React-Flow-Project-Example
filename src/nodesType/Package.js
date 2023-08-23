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
    <Handle type="target" position={Position.Right} />
    <Handle type="target" position={Position.Top } />
    
  </div>
  )
}

export default Package