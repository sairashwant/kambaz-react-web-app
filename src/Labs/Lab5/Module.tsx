import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function Module() {
    const [Module, setModule] = useState({
    id: 2, title: "New NodeJS Module",
    description: "New Create a NodeJS server with ExpressJS",
    course:"Web development",
    score: 100,
    completed: true
  });
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/Module`
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Module</h3>
      <h4>Retrieving Module</h4>
      <a id="wd-retrieve-Module" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/Module`}>
        Get Module
      </a><hr/>
    <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-Module-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/Module/title`}>
        Get Title
      </a><hr/>
            <h4>Modifying Properties</h4>
      <a id="wd-update-Module-title"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/title/${Module.title}`}>
        Update Title
      </a>
      <FormControl className="w-75" id="wd-Module-title"
        defaultValue={Module.title} onChange={(e) =>
          setModule({ ...Module, title: e.target.value })}/>
      <hr />
      <a id="wd-update-Module-title"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/score/${Module.score}`}>
        Update Score
      </a>
      <FormControl className="w-75" id="wd-Module-Score" type="number"
        defaultValue={Module.score} onChange={(e) =>
          setModule({ ...Module, score: Number(e.target.value) })}/>
      <hr />
      <a id="wd-update-Module-title"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/completed/${Module.completed}`}>
        Update Completed
      </a>
      <Form.Check 
        id="wd-Module-Completed?"
        type="checkbox" 
        label="Completed ?:" 
        defaultChecked={Module.completed}
        onChange={(e) =>
          setModule({ ...Module, completed: Boolean(e.target.checked) })}
        
      />
      
    </div>
);}