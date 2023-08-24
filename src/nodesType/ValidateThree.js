import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { GiConfirmed } from "react-icons/gi";

const StandardiseThree = () => {
  return (
    <div className="container">
      <div className="content">
        <div>
          <GiConfirmed className="icon"/>
        </div>
        <p className="name">Validate</p>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} id="a" />
      <Handle type="target" position={Position.Bottom} id="b" />
    </div>
  );
};

export default memo(StandardiseThree);
