import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { SlChemistry } from "react-icons/sl";

function Evaluate() {
  return (
    <div className="fourContainer">
      <Handle type="target" position={Position.Right} />
      <div className="fourContent">
        <div>
          <SlChemistry className="icon"/>
        </div>
        <p className="name">Evaluate</p>
      </div>
      <Handle type="target" position={Position.Right} />
      <Handle type="target" position={Position.Top } id="b" />
      <Handle type="source" position={Position.Left} id="a" />
      
    </div>
  )
}

export default Evaluate