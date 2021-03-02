export const converter = data => {
  const { gambits } = data;

  const branchEdges = [];
  const gambitNodes = Object.keys(gambits).map(gambitId => {
    const { position, name, branches } = gambits[gambitId];
    const outputs=[];
    branches.map(branch => {
      const { branch_id, connect_gid, output } = branch;
      outputs.push(output)
      branchEdges.push({
        id: branch_id,
        source: `g_${gambitId}`,
        target: connect_gid,
        type: 'HIEdge',
        sourceHandle: output
      });
    });

    return {
      id: `g_${gambitId}`,
      type: "Gambit", // input node
      data: { label: name, outputs },
      position
    };
  });

  return [...gambitNodes, ...branchEdges];
};
