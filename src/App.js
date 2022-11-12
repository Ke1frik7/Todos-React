import React from "react";
import {TodoInput, TodoList, Locals} from "./Components"
function App() {
  let [array, setArrayAddTodo] = React.useState([])
  return (
    <div className="App">
      <TodoInput setArrayAddTodo={setArrayAddTodo} />
      <TodoList array={array}/>
      <Locals json={JSON.parse(window.localStorage.getItem("itemTodo"))}/>
      {/* <TodoItem/> */}
   </div>
  );
}

export default App;
