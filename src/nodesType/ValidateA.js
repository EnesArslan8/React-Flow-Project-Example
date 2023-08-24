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
      <Handle type="target" position={Position.Top} id="c"/>
      <Handle type="target" position={Position.Top } id="a" />
      <Handle type="source" position={Position.Left} id="b" />
      
    </div>
  )
}

export default ValidateA