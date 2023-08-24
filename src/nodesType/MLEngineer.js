import React, { memo } from "react";
import { Handle, Position } from "reactflow";

import scientist from "../img/scientist.png";

function MLEngineer() {
  return (
    <div className="container">
      <Handle type="source" position={Position.Left} id="a" />
      <Handle type="source" position={Position.Left} id="b" />
      <Handle type="source" position={Position.Bottom} id="c" />
      <Handle type="source" position={Position.Bottom} id="d" />
      <Handle type="source" position={Position.Bottom} id="e" />
      <Handle type="source" position={Position.Bottom} id="f" />
      <Handle type="source" position={Position.Right} id="g" />

      <div className="content">
        <p style={{fontSize:'24px',whiteSpace:'nowrap'}}>ML Engineer</p>
        <img style={{ width: "400px" }} src={scientist} />
      </div>
    </div>
  );
}

export default MLEngineer;
