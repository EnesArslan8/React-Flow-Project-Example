import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import {PiUsbLight} from 'react-icons/pi'

const StandardiseThree = () => {
  return (
    <div className="threeContainer">
      <Handle
        type="target"
        position={Position.Top}
        
      />
      <div className="threeContent">
        <div>
          <PiUsbLight className="icon"/>
        </div>
        <p className="name">Standardise</p>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        
      />
    </div>
  );
};

export default memo(StandardiseThree);
