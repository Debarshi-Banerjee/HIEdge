import React,{memo} from "react";
import { Handle } from "react-flow-renderer";

const MAX_GAP = 5;

const customNodeStyles = {
  height: 60,
  width: 100,
  background: "#ffffff",
  color: "#FFF",
  padding: 10,
  opacity:0.8
};

const handelStyle = {
  border: "unset",
  borderRadius: "unset",
  background: "red",
  height: 20,
  width: 5
};

const connectionNode = (style={}) => (
  <div
    style={{
      position: "relative",
      background: "blue",
      width: 5,
      height: 20,
      ...style
    }}
  />
);

const Gambit = memo(({ data }) => {
  const { label } = data;
  return (
    <div style={customNodeStyles}>
      <div>
        <Handle type="target" position="top" style={{ top:-20,...handelStyle }}>
          {connectionNode({top:-0})}
        </Handle>
      </div>
      <div>
        <div style={{ color: "black" }}>{label}</div>
      </div>
      <div style={{ height: 20 }}>
        <Handle
          type="source"
          position="bottom"
          id="o_1"
          style={{ ...handelStyle, left: `${50 - MAX_GAP}%`,bottom:-20 }}
        >
          {connectionNode({})}
        </Handle>
        >
        <Handle
          type="source"
          position="bottom"
          id="o_2"
          style={{ ...handelStyle, left: `${50 + MAX_GAP}%`,bottom:-20 }}
        >
          {connectionNode({})}
        </Handle>
      </div>
    </div>
  );
});

export default Gambit;
