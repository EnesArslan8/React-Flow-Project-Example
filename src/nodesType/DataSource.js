import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { BsDatabase } from "react-icons/bs";

function DataSource() {
  return (
    <div className="container">
      <div className="content">
        <div>
          <BsDatabase className="icon" />
        </div>
        <p className="name">Data Source</p>
      </div>
      <Handle type="target" position={Position.Bottom} />
      <Handle type="source" position={Position.Right} />
    </div>
  )
}

export default DataSource