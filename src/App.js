import React, { useEffect, useState } from "react";
import ReactFlow, {
  Panel,
  MarkerType,
  Controls,
  FitBoundsOptions,
} from "reactflow";
import { BsDatabase } from "react-icons/bs";
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
import Evaluate from "./nodesType/Evaluate";
import Package from "./nodesType/Package";
import Containerise from "./nodesType/Containerise";
import Deploy from "./nodesType/Deploy";
import Serve from "./nodesType/Serve";
import Application from "./nodesType/Application";
import DataEngineer from "./nodesType/DataEngineer";
import Store from "./nodesType/Store";
import MLEngineer from "./nodesType/MLEngineer";
import DataScientist from "./nodesType/DataScientist";
import DataSource from "./nodesType/DataSource";
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
  evaluateNode: Evaluate,
  packageNode: Package,
  containeriseNode: Containerise,
  deployNode: Deploy,
  serveNode: Serve,
  applicationNode: Application,
  dataEngineerNode: DataEngineer,
  storeNode: Store,
  mlEngineerNode: MLEngineer,
  dataScientistNode: DataScientist,
  dataSourceNode:DataSource
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
  type:'straight',
  style: {
    stroke: "white",
  },
  markerEnd: {
    fontSize: "20px",
    // color:'000',
    type: MarkerType.ArrowClosed
  },
};
const initialNodes = [
  {
    id: "1",
    position: { x: -200, y: 210 },
    type:'dataSourceNode',
    className: "dataSource",
  },
  {
    id: "20000",
    position: { x: -100, y: 100 },
    className: "noVisible",
    data: {
      label: (
        <div className="noVisible">
          
        </div>
      ),
    }
  },
  {
    id: "2",
    position: { x: 300, y: 210 },
    type: "ingestThree",
    className: "ingest",
  },
  {
    id: "3",
    position: { x: 1300, y: 210 },
    className: "validate",
    type: "validateNode",
  },
  {
    id: "4",
    position: { x: 1800, y: 210 },
    // targetPosition: "left",
    className: "clean",
    // sourcePosition: "bottom",
    type: "threeInputNode",
  },
  {
    id: "5",
    type: "standardiseNode",
    position: { x: 1800, y: 410 },
    className: "standardise",
  },
  {
    id: "6",
    type: "curateThree",
    position: { x: 1800, y: 610 },
    className: "curate",
  },
  {
    id: "7",
    type: "featuresThree",
    position: { x: 1800, y: 810 },
    className: "features",
  },
  {
    id: "8",
    type: "selectFeatureNode",
    position: { x: 1800, y: 1010 },
    className: "selectFeatures",
  },
  {
    id: "9",
    type: "gitNode",
    position: { x: 1800, y: 1210 },
    className: "git",
  },
  {
    id: "10",
    type: "trainNode",
    position: { x: 1300, y: 1210 },
    className: "train",
  },
  {
    id: "11",
    type: "validateANode",
    position: { x: 800, y: 1210 },
    className: "validateA",
  },
  {
    id: "12",
    type: "evaluateNode",
    position: { x: 300, y: 1210 },
    className: "evaluate",
  },
  {
    id: "13",
    type: "packageNode",
    position: { x: -200, y: 1210 },
    className: "package",
  },
  {
    id: "14",
    type: "containeriseNode",
    position: { x: -200, y: 960 },
    className: "containerise",
  },
  {
    id: "15",
    type: "deployNode",
    position: { x: -200, y: 710 },
    className: "deploy",
  },
  // {
  //   id: "16",
  //   type: "serveNode",
  //   position: { x: 500, y: 410 },
  //   className: "serve",
  // },
  {
    id: "16",
    type: "applicationNode",
    position: { x: -200, y: 460 },
    className: "application",
  },
  {
    id: "17",
    type: "dataEngineerNode",
    position: { x: 800, y: 550 },
    className: "img",
  },
  {
    id: "18",
    type: "storeNode",
    position: { x: 800, y: 210 },
    className: "store",
  },
  {
    id: "19",
    type: "mlEngineerNode",
    position: { x: 400, y: 800 },
    className: "ml",
  },
  {
    id: "20",
    type: "dataScientistNode",
    position: { x: 1250, y: 800 },
    className: "dataScientist",
  },
];

const initialEdges = [
  { id: "1-2", source: "1", target: "2" },
  { id: "2-18", source: "2", target: "18" },
  { id: "18-3", source: "18", target: "3" },
  { id: "3-4", source: "3", target: "4" },
  { id: "4-5", source: "4", target: "5" },
  { id: "5-6", source: "5", target: "6" },
  { id: "6-7", source: "6", target: "7" },
  { id: "7-8", source: "7", target: "8" },
  { id: "8-9", source: "8", target: "9" },
  { id: "9-10", source: "9", target: "10" },
  { id: "10-11", source: "10", target: "11" },
  { id: "11-12", source: "11", target: "12" },
  { id: "12-13", source: "12", target: "13" },
  { id: "13-14", source: "13", target: "14" },
  { id: "14-15", source: "14", target: "15" },
  { id: "15-16", source: "15", target: "16" },
  { id: "16-1", source: "16", target: "1" },
  {
    id: "17-2",
    source: "17",
    target: "2",
    sourceHandle: "f",
    targetHandle: "b",
  },
  {
    id: "17-18",
    source: "17",
    target: "18",
    sourceHandle: "a",
    targetHandle: "a",
  },
  {
    id: "17-3",
    source: "17",
    target: "3",
    sourceHandle: "b",
    targetHandle: "b",
  },
  {
    id: "17-4",
    source: "17",
    target: "4",
    sourceHandle: "c",
    targetHandle: "b",
  },
  {
    id: "17-5",
    source: "17",
    target: "5",
    sourceHandle: "d",
    targetHandle: "a",
  },
  {
    id: "17-6",
    source: "17",
    target: "6",
    sourceHandle: "e",
    targetHandle: "b",
  },
  {
    id: "19-9",
    source: "19",
    target: "9",
    sourceHandle: "g",
    targetHandle: "b",
  },
  {
    id: "19-10",
    source: "19",
    target: "10",
    sourceHandle: "f",
    targetHandle: "b",
    data:{className:'lightBlue'}
  },
  {
    id: "19-11",
    source: "19",
    target: "11",
    sourceHandle: "e",
    targetHandle: "a",
    data:{className:'lightBlue'}
  },
  {
    id: "19-12",
    source: "19",
    target: "12",
    sourceHandle: "d",
    targetHandle: "b",
  },
  {
    id: "19-13",
    source: "19",
    target: "13",
    sourceHandle: "c",
    targetHandle: "a",
  },
  {
    id: "19-14",
    source: "19",
    target: "14",
    sourceHandle: "b",
    targetHandle: "a",
  },
  {
    id: "19-15",
    source: "19",
    target: "15",
    sourceHandle: "a",
    targetHandle: "b",
  },
  {
    id: "20-7",
    source: "20",
    target: "7",
    sourceHandle: "a",
    targetHandle: "b",
  },
  {
    id: "20-8",
    source: "20",
    target: "8",
    sourceHandle: "b",
    targetHandle: "b",
  },
  {
    id: "20-9",
    source: "20",
    target: "9",
    sourceHandle: "c",
    targetHandle: "c",
  },
  {
    id: "20-10",
    source: "20",
    target: "10",
    sourceHandle: "d",
    targetHandle: "c",
  },
  {
    id: "20-11",
    source: "20",
    target: "11",
    sourceHandle: "e",
    targetHandle: "c",
  },
  {
    id: "20-12",
    source: "20",
    target: "12",
    sourceHandle: "f",
    targetHandle: "c",
  },
];
export default function App() {
  const [pageload, IsPageLoad] = useState(true);
  useEffect(() => {
    if (pageload) {
      console.log("sayfa load oldu");
      // let sa=document.querySelector(".react-flow__controls > button");
      handleClick();
    }
  }, []);
  const handleClick = () => {
    setTimeout(() => {
      let findElement = document.querySelector(
        ".react-flow__controls > button"
      );
      if (findElement) findElement.click();
      console.log(findElement);
    }, 500);
  };

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
      <Controls showZoom={false} />
    </ReactFlow>
  );
}
