import Flow from "./components/Flow";
import "./App.css";

const sampleData = {
  gambits: {
    
    // H
    1: {
      name: "1",
      position: { x: 300, y: 200 },
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
      name: "2",
      position: { x: 100, y: 100 },
      branches: [
				{
          branch_id: "b_5",
          connect_gid: "g_6",
          output: "o_6"
        }
			]
    },
    3: {
      name: "3",
      position: { x: 500, y: 100 },
      branches: [{
				branch_id: "b_4",
				connect_gid: "g_5",
				output: "o_4"
			}]
		},
		4: {
      name: "4",
      position: { x: 300, y: 400 },
      branches: []
		},
		5: {
      name: "5",
      position: { x: 495, y: 500 },
      branches: [{
				branch_id: "b_9",
				connect_gid: "g_4",
				output: "o_3"
			}]
		},
		6: {
      name: "6",
      position: { x: 94, y: 500 },
      branches: [
				{
          branch_id: "b_3",
          connect_gid: "g_4",
          output: "o_3"
        }
			]
    },






// I
    7:{
      name:"7",
      position:{x:700,y:300},
      branches:[]
    },
    8:{
      name:"8",
      position:{x:800,y:300},
      branches:[]
    },
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
