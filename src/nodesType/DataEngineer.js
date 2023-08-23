import React, { memo } from "react";
import { Handle, Position } from "reactflow";

import dataManagement from "../img/data-management.png";
// import dataScientist from "./img/data-scientist.png";
// import scientist from "./img/scientist.png";
function DataEngineer() {
  return (
    <div className="fourContainer">
      <Handle type="source" position={Position.Top} id="f" />
      <Handle type="source" position={Position.Top}  id="a" />
      <Handle type="source" position={Position.Top}  id="b"/>
      <Handle type="source" position={Position.Right}  id="c"/>
      <Handle type="source" position={Position.Right}  id="d"/>
      <Handle type="source" position={Position.Right}  id="e"/>

      <img style={{width:'200px'}} src={dataManagement} />
    </div>
  );
}

export default DataEngineer;
