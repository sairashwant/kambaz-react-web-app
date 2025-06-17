import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { updateModule, setModules } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const isFaculty = currentUser?.role === "FACULTY";

  const refreshModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    refreshModules();
  }, [cid]);

  const addModuleHandler = async () => {
    await coursesClient.createModuleForCourse(cid!, {
      name: moduleName,
      course: cid,
    });
    await refreshModules();
    setModuleName("");
  };

  const deleteModuleHandler = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    await refreshModules();
  };

  const updateModuleHandler = async (module: any) => {
    await modulesClient.updateModule(module);
    await refreshModules();
  };

  return (
    <div>
      {isFaculty && (
        <>
          <ModulesControls
            moduleName={moduleName}
            setModuleName={setModuleName}
            addModule={addModuleHandler}
          />
          <br /><br /><br /><br />
        </>
      )}

      <ListGroup id="wd-modules" className="rounded-0">
        {modules.map((module: any) => (
          <ListGroup.Item key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing && module.name}
              {module.editing && isFaculty && (
                <FormControl
                  className="w-50 d-inline-block"
                  value={module.tempName ?? module.name}
                  onChange={(e) => {
                    const updated = { ...module, tempName: e.target.value };
                    dispatch(updateModule(updated));
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateModuleHandler({
                        ...module,
                        name: module.tempName ?? module.name,
                        editing: false,
                      });
                    }
                  }}
                />
              )}
              {isFaculty ? (
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={() => deleteModuleHandler(module._id)}
                  editModule={() =>
                    dispatch(
                      updateModule({
                        ...module,
                        editing: true,
                        tempName: module.name,
                      })
                    )
                  }
                />
              ) : (
                <FaCheckCircle className="text-success ms-3" />
              )}
            </div>

            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroup.Item key={lesson._id} className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    {isFaculty ? (
                      <LessonControlButtons />
                    ) : (
                      <FaCheckCircle className="text-success float-end" />
                    )}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
