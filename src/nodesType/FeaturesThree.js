import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import {AiOutlineLayout} from 'react-icons/ai'

function FeaturesThree() {
  return (
    <div className="container">
      <div className="content">
        <div>
          <AiOutlineLayout className="icon"/>
        </div>
        <p className="name" style={{paddingLeft:'27px'}}>Extract Features</p>
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left } id="b" />
      <Handle type="source" position={Position.Bottom} id="a" />
      
    </div>
  )
}

export default FeaturesThree