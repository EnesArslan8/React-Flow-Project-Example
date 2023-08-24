import React, { memo } from "react";
import { Handle, Position } from "reactflow";

import dataManagement from "../img/data-management.png";
function DataEngineer() {
  return (
    <div className="fourContainer">
      <Handle type="source" position={Position.Top} id="f" />
      <Handle type="source" position={Position.Top} id="a" />
      <Handle type="source" position={Position.Top} id="b" />
      <Handle type="source" position={Position.Right} id="c" />
      <Handle type="source" position={Position.Right} id="d" />
      <Handle type="source" position={Position.Right} id="e" />
      <div>
        <img style={{ width: "200px" }} src={dataManagement} />
        <p>Data Engineer</p>
      </div>
    </div>
  );
}

export default DataEngineer;
