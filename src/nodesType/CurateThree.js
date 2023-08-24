import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import {BsCalculatorFill} from 'react-icons/bs'
function CurateThree() {
  return (
    <div className="container">
      <div className="content">
        <div>
          <BsCalculatorFill className="icon"/>
        </div>
        <p className="name">Curate</p>
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left } id="b" />
      <Handle type="source" position={Position.Bottom} id="a" />
      
    </div>
  )
}

export default CurateThree