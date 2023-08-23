import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { GiConfirmed } from "react-icons/gi";

const StandardiseThree = () => {
  return (
    <div className="threeContainer">
      <Handle type="target" position={Position.Left} />
      <div className="threeContent">
        <div>
          <GiConfirmed className="icon"/>
        </div>
        <p className="name">Validate</p>
      </div>
      <Handle type="source" position={Position.Right} id="a" />
      <Handle type="target" position={Position.Bottom} id="b" />
    </div>
  );
};

export default memo(StandardiseThree);
