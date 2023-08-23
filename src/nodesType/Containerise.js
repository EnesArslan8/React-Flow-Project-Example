import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { RiShipLine } from "react-icons/ri";

function Containerise() {
  return (
    <div className="fourContainer">
      <Handle type="target" position={Position.Bottom} />
      <div className="fourContent">
        <div>
          <RiShipLine className="icon" />
        </div>
        <p className="name">Package</p>
      </div>
      <Handle type="target" position={Position.Right} />
      <Handle type="source" position={Position.Top} />
    </div>
  );
}

export default Containerise;
