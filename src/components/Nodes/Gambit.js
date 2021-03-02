import React, { memo } from "react";
import { Handle } from "react-flow-renderer";

const MAX_GAP = 5;

const customNodeStyles = {
  height: 60,
  width: 100,
  background: "#ffffff",
  color: "#FFF",
  padding: 10,
  opacity: 0.8
};

const handelStyle = {
  border: "unset",
  borderRadius: "unset",
  background: "blue",
  height: 20,
  width: 5
};

const connectionNode = (style = {}) => (
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
  const { label, outputs } = data;
  return (
    <div style={customNodeStyles}>
      <div>
        <Handle type="target" position="top" style={{ top: -20, ...handelStyle }}>
        </Handle>
      </div>
      <div>
        <div style={{ color: "black" }}>{label}</div>
      </div>
      <div style={{ height: 20 }}>
        {outputs.map((output, index) => (
          <Handle
            type="source"
            position="bottom"
            id={output}
            style={{ ...handelStyle, left: `${50 - MAX_GAP * (index % 2 === 1 ? -1 : 1)}%`, bottom: -20 }}
          >
          </Handle>
        ))}
      </div>
    </div>
  );
});

export default Gambit;
