import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { RiShipLine } from "react-icons/ri";

function Containerise() {
  return (
    <div className="container">
      <div className="content">
        <div>
          <RiShipLine className="icon" />
        </div>
        <p className="name">Containerise</p>
      </div>
      <Handle type="target" position={Position.Bottom} />
      <Handle type="target" position={Position.Right} id="a" />
      <Handle type="source" position={Position.Top} />
    </div>
  );
}

export default Containerise;
