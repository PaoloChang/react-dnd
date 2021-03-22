// import { useState, useEffect } from "react";
import "./App.css";
import DragNDrop from "./components/DragNDrop";

const data = [
  { title: "Group 1", items: ["1", "2", "3"] },
  { title: "Group 2", items: ["4", "5"] },
];

function App() {
  // const [data, setData] = useState();
  // useEffect(() => {
  //   if (localStorage.getItem("List")) {
  //     console.log(localStorage.getItem("List"));
  //     setData(JSON.parse(localStorage.getItem("List")));
  //   }
  //   return () => {
  //     setData(sampleData);
  //   };
  // }, [setData]);

  return (
    <div className="App">
      <header className="App-header">
        <DragNDrop data={data} />
      </header>
    </div>
  );
}

export default App;
