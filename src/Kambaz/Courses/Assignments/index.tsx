import { ListGroup } from "react-bootstrap";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentControl from "./AssignmentControl";
import { FaAngleDown, FaPlus } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControl />
      <br />

      <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
          <span><BsGripVertical className="fs-4" /><FaAngleDown className="me-2"/>ASSIGNMENTS 40% of Total</span>
          <div className="d-flex align-items-center gap-2">
            <span className="fs-6 border border-light px-2 py-1 rounded">40% of total</span>
            <FaPlus className="fs-5" />
            <IoEllipsisVertical className="fs-4" />
          </div>
        </div>

        <ListGroup className="wd-lessons rounded-0">

          <ListGroup.Item className="wd-lesson p-3 ps-1">
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex align-items-start me-3">
                <BsGripVertical className="me-2 fs-4" />
                <MdAssignment className="me-2 fs-4 text-success" />
              </div>
              <div className="flex-grow-1">
                <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link text-decoration-none">
                  A1 - ENV + HTML
                </a>
                <br />
                <small>
                  <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | Due May 13 at 11:59p | 100 pts
                </small>
              </div>
              <div>
                <AssignmentControlButtons />
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="wd-lesson p-3 ps-1">
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex align-items-start me-3">
                <BsGripVertical className="me-2 fs-4" />
                <MdAssignment className="me-2 fs-4 text-success" />
              </div>
              <div className="flex-grow-1">
                <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link text-decoration-none">
                  A2 - CSS + BOOTSTRAP
                </a>
                <br />
                <small>
                  <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | Due May 20 at 11:59p | 100 pts
                </small>
              </div>
              <div>
                <AssignmentControlButtons />
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="wd-lesson p-3 ps-1">
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex align-items-start me-3">
                <BsGripVertical className="me-2 fs-4" />
                <MdAssignment className="me-2 fs-4 text-success" />
              </div>
              <div className="flex-grow-1">
                <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link text-decoration-none">
                  A3 - JAVASCRIPT + REACT
                </a>
                <br />
                <small>
                  <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am | Due May 27 at 11:59p | 100 pts
                </small>
              </div>
              <div>
                <AssignmentControlButtons />
              </div>
            </div>
          </ListGroup.Item>

        </ListGroup>
      </ListGroup.Item>
    </div>
  );
}
