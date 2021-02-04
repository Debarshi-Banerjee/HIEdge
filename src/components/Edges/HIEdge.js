import React from "react";
import { getHIEdgePath } from "./Utils/HiEdgePath";

export default function HIEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  selected = false,
  style = {}
}) {
  let edgeStyle = { stroke: "limegreen", strokeWidth: 3 };
  const edgePath = getHIEdgePath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition
  });
  if (selected) {
    edgeStyle = {
      ...edgeStyle,
      stroke: "aqua",
      strokeWidth: 5
    };
  }

  return (
    <>
      <path
        id={id}
        style={edgeStyle}
        className="react-flow__edge-path"
        d={edgePath}
      />
    </>
  );
}
