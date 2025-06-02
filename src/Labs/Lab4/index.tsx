import { Container } from "react-bootstrap";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";

export default function Lab4(){
      function sayHello() {
        alert("Hello");}

    return (
        <Container>
        <h1>Lab 4</h1>
        <ClickEvent />
        <PassingDataOnEvent/>
        <PassingFunctions theFunction={sayHello}/>
        <EventObject/>
        <Counter/>
        <BooleanStateVariables/>        
        </Container>
    )
}