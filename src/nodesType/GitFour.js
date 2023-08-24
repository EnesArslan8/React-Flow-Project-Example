import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import {BiLogoGit} from 'react-icons/bi'

function GitFour() {
  return (
    <div className="container">
      <div className="content">
        <div>
          <BiLogoGit className="icon"/>
        </div>
        <p className="name">Code</p>
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Top} id="c"/>
      <Handle type="target" position={Position.Left } id="b" />
      <Handle type="source" position={Position.Left} id="a" />
      
    </div>
  )
}

export default GitFour