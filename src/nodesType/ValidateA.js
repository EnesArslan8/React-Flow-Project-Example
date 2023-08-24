import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { GiConfirmed } from "react-icons/gi";
function ValidateA() {
  return (
    <div className="container">
      <div className="content">
        <div>
          <GiConfirmed className="icon"/>
        </div>
        <p className="name">Validate</p>
      </div>
      <Handle type="target" position={Position.Right} />
      <Handle type="target" position={Position.Top} id="c"/>
      <Handle type="target" position={Position.Top } id="a" />
      <Handle type="source" position={Position.Left} id="b" />
      
    </div>
  )
}

export default ValidateA