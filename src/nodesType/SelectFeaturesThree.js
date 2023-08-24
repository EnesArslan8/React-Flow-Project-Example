import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import {BsLayoutThreeColumns} from 'react-icons/bs'
function SelectFeaturesThree() {
  return (
    <div className="container">
      <div className="content">
        <div>
          <BsLayoutThreeColumns className="icon"/>
        </div>
        <p className="name">Select Features</p>
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left } id="b" />
      <Handle type="source" position={Position.Bottom} id="a" />
      
    </div>
  )
}

export default SelectFeaturesThree