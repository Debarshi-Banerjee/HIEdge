import React from "react";
import { getHIEdgePath } from "../Edges/Utils/HIEdgePath";
export default ({
  sourceX,
  sourceY,
  sourcePosition,
  targetX,
  targetY,
  targetPosition,
  connectionLineType,
  connectionLineStyle
}) => {
  const edgePath = getHIEdgePath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition
  });
  let edgeStyle = { stroke: "limegreen", strokeWidth: 3 };

  return (
    <g>
      <path fill="none" style={edgeStyle} sclassName="animated" d={edgePath} />
      <path  style={{
        fill:'red',
        right:5,
      }} d={`M${targetX+2.5},${targetY-10} l-5,0 l0,20, l5,0 l0,-20 Z`}
      />
    </g>
  );
};
