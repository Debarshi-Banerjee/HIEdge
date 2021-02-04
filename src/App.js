import Flow from "./components/Flow";
import "./App.css";

const sampleData = {
  gambits: {
    1: {
      name: "FirstGambit",
      position: { x: 300, y: 200 },
      outputs: ["o_2", "o_2"],
      branches: [
        {
          branch_id: "b_1",
          connect_gid: "g_2",
          output: "o_1"
        },
        {
          branch_id: "b_2",
          connect_gid: "g_3",
          output: "o_2"
        }
      ]
    },
    2: {
      name: "SecondGambit",
      position: { x: 100, y: 100 },
      branches: [
				{
          branch_id: "b_3",
          connect_gid: "g_4",
          output: "o_1"
        }
			]
    },
    3: {
      name: "ThirdGambit",
      position: { x: 500, y: 100 },
      branches: [{
				branch_id: "b_4",
				connect_gid: "g_5",
				output: "o_1"
			}]
		},
		4: {
      name: "ForthGambit",
      position: { x: 100, y: 300 },
      branches: []
		},
		5: {
      name: "FifthGambit",
      position: { x: 500, y: 300 },
      branches: []
		},
		6: {
      name: "SixthGambit",
      position: { x: 300, y: 500 },
      branches: []
    }
  }
};

function App() {
  return (
    <div>
      <Flow data={sampleData} />
    </div>
  );
}

export default App;
