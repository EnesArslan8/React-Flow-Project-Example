import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { BsArrowRight } from "react-icons/bs";
import { TfiLineDotted } from "react-icons/tfi";

const StandardiseThree = () => {
  return (
    <div className="threeContainer">
      <Handle type="target" position={Position.Left} />
      <div className="threeContent">
        <div style={{ display: "inline-flex", flexDirection: "column" }}>
          <BsArrowRight className="icon rightArrow"/>
          <TfiLineDotted className="icon"/>
        </div>
        <p className="name">Ingest</p>
      </div>
      <Handle type="source" position={Position.Right} id="a" />
      <Handle type="target" position={Position.Bottom} id="b" />
    </div>
  );
};

export default memo(StandardiseThree);
