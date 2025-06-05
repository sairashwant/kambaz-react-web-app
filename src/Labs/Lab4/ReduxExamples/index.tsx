import AddRedux from "./AddRedux/index.tsx";
import CounterRedux from "./CounterRedux.tsx";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList.tsx";

export default function ReduxExamples() {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux/>
      <CounterRedux/>
      <AddRedux/> 
      <TodoList/>
    </div>
  );
};
