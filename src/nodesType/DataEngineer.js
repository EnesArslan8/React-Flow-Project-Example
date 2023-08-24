import React, { memo } from "react";
import { Handle, Position } from "reactflow";

import dataManagement from "../img/data-management.png";
function DataEngineer() {
  return (
    <div className="container">
      <Handle type="source" position={Position.Top} id="f" />
      <Handle type="source" position={Position.Top} id="a" />
      <Handle type="source" position={Position.Top} id="b" />
      <Handle type="source" position={Position.Right} id="c" />
      <Handle type="source" position={Position.Right} id="d" />
      <Handle type="source" position={Position.Right} id="e" />
      <div className="content">
        <img style={{ width: "400px" }} src={dataManagement} />
        <p style={{fontSize:'24px',whiteSpace:'nowrap'}}> Data Engineer</p>
      </div>
    </div>
  );
}

export default DataEngineer;
