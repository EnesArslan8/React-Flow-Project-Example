import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { GiConfirmed } from "react-icons/gi";
function ValidateA() {
  return (
    <div className="fourContainer">
      <Handle type="target" position={Position.Right} />
      <div className="fourContent">
        <div>
          <GiConfirmed className="icon"/>
        </div>
        <p className="name">Validate</p>
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Top } id="b" />
      <Handle type="source" position={Position.Left} id="a" />
      
    </div>
  )
}

export default ValidateA