import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { SiEventstore } from "react-icons/si";

function Store() {
  return (
    <div className="container">

      <div className="content">
        <div>
          <SiEventstore className="icon" />
        </div>
        <p className="name">Store</p>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Bottom} id="a" />
      <Handle type="source" position={Position.Right} id="b" />
    </div>
  );
}

export default Store;
