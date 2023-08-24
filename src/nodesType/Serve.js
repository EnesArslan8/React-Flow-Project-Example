import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { PiPlugsFill } from "react-icons/pi";

function Serve() {
  return (
    <div className="container">
      <Handle type="target" position={Position.Bottom} />
      <div className="content">
        <div>
          <PiPlugsFill className="icon" />
        </div>
        <p className="name">Serve</p>
      </div>
      <Handle type="source" position={Position.Top} />
    </div>
  )
}

export default Serve