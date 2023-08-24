import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import {FaBrain} from 'react-icons/fa'
function Train() {
  return (
    <div className="fourContainer">
      <Handle type="target" position={Position.Right} />
      <div className="fourContent">
        <div>
          <FaBrain className="icon"/>
        </div>
        <p className="name">Train</p>
      </div>
      <Handle type="target" position={Position.Top} id="c"/>
      <Handle type="target" position={Position.Left } id="b" />
      <Handle type="source" position={Position.Left} id="a" />
      
    </div>
  )
}

export default Train