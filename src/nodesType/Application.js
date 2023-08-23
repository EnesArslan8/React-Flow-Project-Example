import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { TbAppWindowFilled } from "react-icons/tb";

function Application() {
  return (
    <div className="fourContainer">
      <Handle type="target" position={Position.Bottom} />
      <div className="fourContent">
        <div>
          <TbAppWindowFilled className="icon" />
        </div>
        <p className="name">Application</p>
      </div>
      <Handle type="source" position={Position.Top} />
    </div>
  )
}

export default Application