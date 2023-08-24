import React, { memo } from "react";
import { Handle, Position } from "reactflow";

import dataScientist from "../img/data-scientist.png";

function DataScientist() {
  return (
    <div className="fourContainer">
      <Handle type="source" position={Position.Right} id="a" />
      <Handle type="source" position={Position.Right} id="b" />
      <Handle type="source" position={Position.Right} id="c" />
      <Handle type="source" position={Position.Bottom} id="d" />
      <Handle type="source" position={Position.Bottom} id="e" />
      <Handle type="source" position={Position.Bottom} id="f" />

      <div>
        <img style={{ width: "200px" }} src={dataScientist} />
        <p>Data Scientist</p>
      </div>
    </div>
  )
}

export default DataScientist