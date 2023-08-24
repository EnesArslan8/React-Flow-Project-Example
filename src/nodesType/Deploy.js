import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { BsRocketTakeoff } from "react-icons/bs";

function Deploy() {
  return (
    <div className="fourContainer">
      <Handle type="target" position={Position.Bottom} />
      <div className="fourContent">
        <div>
          <BsRocketTakeoff className="icon" />
        </div>
        <p className="name">Deploy</p>
      </div>
      <Handle type="target" position={Position.Right} id="b"/>
      <Handle type="source" position={Position.Top} id="a"/>
    </div>
  )
}

export default Deploy