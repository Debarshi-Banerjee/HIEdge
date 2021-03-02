import React, { useState, useCallback } from "react";
import ReactFlow, { removeElements, updateEdge, addEdge } from "react-flow-renderer";
import Gambit from "./Nodes/Gambit";
import HIEdge from "./Edges/HIEdge";
import HIEdgeConnection from "./Connections/HIEdgeConnection";
import { converter } from "./Utils/business/dataFlowConverter";

const style = {
  background: "#d6dadc",
  width: "100%"
};

const nodeTypes = {
  Gambit: Gambit
};

const edgeTypes = {
  HIEdge: HIEdge
};

export default props => {
  const { data } = props;

  const initialElements = converter({ ...data });

  const [elements, setElements] = useState(initialElements);

  const onElementsRemove = useCallback(
    elementsToRemove =>
      setElements(els => removeElements(elementsToRemove, els)),
    []
  );
  const onConnect = useCallback(params => {
    return (
      setElements(els => {
        return addEdge({ ...params, type: "HIEdge" }, els);
      }),
      []
    );
  });

  const onConnectStart = useCallback((event, params) => {
    const { nodeId, handleType, handleId } = params
    setElements(els => {
      if (handleType === 'source') {
        return els.filter(({ sourceHandle, source }) => { return !(source === nodeId && sourceHandle === handleId) });
      }
      return [...els]
    })
  });

  const onEdgeUpdate = (oldEdge, newConnection) =>
    setElements(els => updateEdge(oldEdge, newConnection, els));

  return (
    <div style={{ height: "100vh", ...style }}>
      <ReactFlow
        elements={elements}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onConnectStart={onConnectStart}
        onEdgeUpdate={onEdgeUpdate}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        connectionLineComponent={HIEdgeConnection}
      />
    </div>
  );
};
