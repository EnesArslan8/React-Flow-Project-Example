import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { MdOutlineCleaningServices } from "react-icons/md";

const ThreeInputNode = () => {
  return (
    <div className="threeContainer">
      <Handle type="target" position={Position.Left} />
      <div className="threeContent">
        <div>
          <MdOutlineCleaningServices className="icon"/>
        </div>
        <p className="name">Clean</p>
      </div>
      <Handle type="target" position={Position.Left } id="b" />
      <Handle type="source" position={Position.Bottom} id="a" />
      
    </div>
  );
};

export default memo(ThreeInputNode);
