import React from "react";
import ReactFlow, { Panel, MarkerType } from "reactflow";
import { BsDatabase, BsArrowRight } from "react-icons/bs";
import { LuAppWindow } from "react-icons/lu";
import { TfiLineDotted } from "react-icons/tfi";
import { SiEventstore } from "react-icons/si";
import { GrValidate } from "react-icons/gr";
import { MdOutlineCleaningServices } from "react-icons/md";
import { PiUsbLight } from "react-icons/pi";
import "./App.css";
import ThreeInputNode from "./nodesType/ThreeConnect";
import StandardiseThree from "./nodesType/StandardiseThree";
import ValidateThree from "./nodesType/ValidateThree";
import IngestThree from "./nodesType/IngestThree";
import CurateThree from "./nodesType/CurateThree";
import FeaturesThree from "./nodesType/FeaturesThree";
import SelectFeaturesThree from "./nodesType/SelectFeaturesThree";
import GitFour from "./nodesType/GitFour";
import Train from "./nodesType/Train";
import ValidateA from "./nodesType/ValidateA";
import "reactflow/dist/style.css";

const nodeTypes = {
  threeInputNode: ThreeInputNode,
  standardiseNode: StandardiseThree,
  validateNode: ValidateThree,
  ingestThree: IngestThree,
  curateThree: CurateThree,
  featuresThree: FeaturesThree,
  selectFeatureNode: SelectFeaturesThree,
  gitNode: GitFour,
  trainNode: Train,
  validateANode: ValidateA,
};

const customStyle = {
  background: "#222",
  width: "100vw",
  height: "100vh",
};

const headerStyle = {
  width: "60vw",
  margin: "1rem 2rem",
  height: "auto",
  userSelect: "none",
};
const firstBtnStyle = {
  with: "100%",
  height: "100%",
  padding: "1rem 2rem",
  borderRadius: "40px",
  border: "none",
  outline: "none",
  fontSize: "20px",
  background: "#fefe32",
  fontWeight: "600",
};
const secondBtnStyle = {
  with: "100%",
  height: "100%",
  padding: "1rem 2rem",
  borderRadius: "40px",
  border: "none",
  outline: "none",
  fontSize: "20px",
  background: "#fe3398",
  color: "#fff",
  fontWeight: "600",
};
const lastBtnStyle = {
  with: "100%",
  height: "100%",
  padding: "1rem 2rem",
  borderRadius: "40px",
  border: "none",
  outline: "none",
  fontSize: "20px",
  background: "#00fefe",
  fontWeight: "600",
};
const versusStyle = {
  fontSize: "16.5px",
  color: "#fff",
  fontWeight: "600",
  margin: "0 1rem",
};
const edgeOptions = {
  animated: true,
  style: {
    stroke: "white",
  },
  markerEnd: {
    fontSize: "20px",
    type: MarkerType.Arrow,
  },
};
const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 140 },
    className: "dataSource",
    data: {
      label: (
        <div>
          <div>
            <BsDatabase className="icon"/>
          </div>
          <p>Data Source</p>
        </div>
      ),
    },
    sourcePosition: "right",
    targetPosition: "bottom",
  },
  {
    id: "2",
    position: { x: 300, y: 140 },
    type: "ingestThree",
    // targetPosition: "left",
    className: "ingest",
    // sourcePosition: "right",
  },
  {
    id: "3",
    position: { x: 500, y: 140 },
    // targetPosition: "left",
    className: "validate",
    type: "validateNode",
    // sourcePosition: "right",
  },
  {
    id: "4",
    position: { x: 750, y: 140 },
    // targetPosition: "left",
    className: "clean",
    // sourcePosition: "bottom",
    type: "threeInputNode",
  },
  {
    id: "5",
    type: "standardiseNode",
    position: { x: 750, y: 450 },
    className: "standardise",
  },
  {
    id: "6",
    type: "curateThree",
    position: { x: 750, y: 650 },
    className: "curate",
  },
  {
    id: "7",
    type: "featuresThree",
    position: { x: 750, y: 850 },
    className: "features",
  },
  {
    id: "8",
    type: "selectFeatureNode",
    position: { x: 750, y: 1050 },
    className: "selectFeatures",
  },
  {
    id: "9",
    type: "gitNode",
    position: { x: 750, y: 1250 },
    className: "git",
  },
  {
    id: "10",
    type: "trainNode",
    position: { x: 550, y: 1250 },
    className: "train",
  },
  {
    id: "11",
    type: "validateANode",
    position: { x: 350, y: 1250 },
    className: "validateA",
  },
  {
    id: "12",
    type: "evaluateNode",
    position: { x: 150, y: 1250 },
    className: "evaluate",
  },
];

const initialEdges = [
  { id: "1-2", source: "1", target: "2" },
  { id: "2-3", source: "2", target: "3" },
  { id: "3-4", source: "3", target: "4" },
  { id: "4-5", source: "4", target: "5" },
  { id: "5-6", source: "5", target: "6" },
  { id: "6-7", source: "6", target: "7" },
  { id: "7-8", source: "7", target: "8" },
  { id: "8-9", source: "8", target: "9" },
  { id: "9-10", source: "9", target: "10" },
  { id: "10-11", source: "10", target: "11" },
];

export default function App() {
  return (
    <ReactFlow
      nodes={initialNodes}
      edges={initialEdges}
      defaultEdgeOptions={edgeOptions}
      nodeTypes={nodeTypes}
    >
      <div style={customStyle}>
        <Panel>
          <div style={headerStyle}>
            <button style={firstBtnStyle}>Data Engineer</button>
            <span style={versusStyle}>VS</span>
            <button style={secondBtnStyle}>Data Scientist</button>
            <span style={versusStyle}>VS</span>
            <button style={lastBtnStyle}>ML Engineer</button>
          </div>
        </Panel>
      </div>
    </ReactFlow>
  );
}
