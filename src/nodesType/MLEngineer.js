import React, { memo } from "react";
import { Handle, Position } from "reactflow";

import scientist from "../img/scientist.png";

function MLEngineer() {
  return (
    <div className="fourContainer">
      <Handle type="source" position={Position.Left} id="a" />
      <Handle type="source" position={Position.Left} id="b" />
      <Handle type="source" position={Position.Bottom} id="c" />
      <Handle type="source" position={Position.Bottom} id="d" />
      <Handle type="source" position={Position.Bottom} id="e" />
      <Handle type="source" position={Position.Bottom} id="f" />
      <Handle type="source" position={Position.Right} id="g" />

      <div>
        <img style={{ width: "200px" }} src={scientist} />
        <p>ML Engineer</p>
      </div>
    </div>
  );
}

export default MLEngineer;
