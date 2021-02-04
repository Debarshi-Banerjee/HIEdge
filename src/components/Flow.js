import React, { useState, useCallback } from "react";
import ReactFlow, { removeElements,updateEdge, addEdge } from "react-flow-renderer";
import Gambit from "./Nodes/Gambit";
import HIEdge from "./Edges/HIEdge";
import HIEdgeConnection from "./Connections/HIEdgeConnection";
import { converter } from "./Utils/business/dataFlowConverter";

const style = {
  background: "#e2e4e6",
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
    console.log(params);
    return (
      setElements(els => {
        console.log(els);
        return addEdge({ ...params, type: "HIEdge" }, els);
      }),
      []
    );
  });

  const onEdgeUpdate = (oldEdge, newConnection) =>
    setElements(els => updateEdge(oldEdge, newConnection, els));

  return (
    <div style={{ height: "100vh", ...style }}>
      <ReactFlow
        elements={elements}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onEdgeUpdate={onEdgeUpdate}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        connectionLineComponent={HIEdgeConnection}
      />
    </div>
  );
};
