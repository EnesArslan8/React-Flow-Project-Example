import React, { memo } from "react";
import { Handle, Position } from "reactflow";

import dataScientist from "../img/data-scientist.png";

function DataScientist() {
  return (
    <div className="container">
      <Handle type="source" position={Position.Right} id="a" />
      <Handle type="source" position={Position.Right} id="b" />
      <Handle type="source" position={Position.Right} id="c" />
      <Handle type="source" position={Position.Bottom} id="d" />
      <Handle type="source" position={Position.Bottom} id="e" />
      <Handle type="source" position={Position.Bottom} id="f" />

      <div className="content">
        <p style={{fontSize:'24px',whiteSpace:'nowrap',backgroundColor:'rgba(0,0,0,.3)',padding:'.2rem .5rem'}}>Data Scientist</p>
        <img style={{ width: "400px" }} src={dataScientist} />
      </div>
    </div>
  )
}

export default DataScientist