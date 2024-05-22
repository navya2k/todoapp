import { useState } from "react";
import Todo from "./components/Todo";
import InlineComponent from "./components/InlineComponent";

function App() {
  const [count, setCount] = useState(0);

  return <div><InlineComponent/></div>;
}

export default App;
