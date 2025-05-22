import Add from './Add';
import AddingAndRemovingToFromArrays from './AddingAndRemovingToFromArrays';
import ArrayIndexAndLength from './ArrayIndexandLength';
import ArrowFunctions from './ArrowFunctions';
import BooleanVariables from './BooleanVariables';
import Classes from './Classes';
import ConditionalOutputIfElse from './ConditionalOutputIfElse';
import ConditionalOutputInline from './ConditionalOutputInLine';
import Destructing from './Destructing';
import DestructingImports from './DestructingImports';
import FilterFunction from './FilterFunction';
import FindFunction from './FindFunction';
import FindIndex from './FindIndex';
import ForLoops from './ForLoops';
import FunctionDestructing from './FunctionDestructing';
import House from './House';
import IfElse from './IfElse';
import ImpliedReturn from './ImpliedReturn';
import JsonStringify from './JsonStringify';
import LegacyFunctions from './LegacyFunctions';
import MapFunction from './MapFunction';
import SimpleArrays from './SimpleArrays';
import Spreading from './Spread';
import Square from './Square';
import Styles from './Styles';
import TemplateLiterals from './TemplateLiterals';
import TernaryOperator from './TernaryOperator';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import VariablesAndConstants from './VariablesAndConstants';
import VariableTypes from './VariableTypes';

export default function Lab3() {
  return(
    <div id="wd-lab3">
      <h3>Lab 3</h3>
      <VariablesAndConstants/>
      <VariableTypes/>
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturn />
      <TemplateLiterals />
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FindIndex />
      <FilterFunction />
      <JsonStringify />
      <House />
      <TodoItem />
      <TodoList />
      <Spreading />
      <Destructing />
      <FunctionDestructing />
      <DestructingImports />
      <Classes />
      <Styles />
      <Add a={3} b={4} />
      <h4>Square of 4</h4>
      <Square>4</Square>
      <hr />
    </div>
  );
}
