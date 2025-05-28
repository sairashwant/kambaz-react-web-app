import { Col, Form, Row, Button } from "react-bootstrap";
import * as db from "../../Database";
import { Link, useParams } from "react-router-dom";
export default function AssignmentEditor() {
  const {aid}=useParams()
  const assignment = db.assignments.find((a)=>aid === a._id)
  const {cid} = useParams()
  if (!assignment) {
  return <div className="p-3">Assignment not found.</div>; 
}
  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name"></Form.Label>
          <Form.Control id="wd-name" defaultValue={assignment.title}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-description">Description</Form.Label>
          <Form.Control
            as="textarea"
            id="wd-description"
            className="w-50"
            rows={3}
            defaultValue={assignment.description}
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Points</Form.Label>
          <Col sm={4}>
            <Form.Control defaultValue={assignment.points} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Assignment Group</Form.Label>
          <Col sm={4}>
            <Form.Select defaultValue={assignment.group}>
              <option value="Assignments">Assignments</option>
              <option value="Quizzes">Quizzes</option>
              <option value="Exams">Exams</option>
              <option value="Project">Project</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Display Grade</Form.Label>
          <Col sm={4}>
            <Form.Select id="wd-display-grade-as" defaultValue={assignment.displayGrade}>
              <option value="Percentage">Percentage</option>
              <option value="Points Earned">Points Earned</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Submission Type</Form.Label>
          <Col sm={10}>
            <Form.Select id="wd-submission-type" defaultValue={assignment.submissionType}>
              <option value="Online">Online</option>
            </Form.Select>

            <Form.Label className="mt-2">Online entry options</Form.Label>
            <div>
              <Form.Check type="checkbox" label="Text Entry" id="wd-text-entry"/>
              <Form.Check type="checkbox" label="Website URL" id="wd-website-url" />
              <Form.Check type="checkbox" label="Media Recordings" id="wd-media-recordings" />
              <Form.Check type="checkbox" label="Student Annotation" id="wd-student-annotation" />
              <Form.Check type="checkbox" label="File Uploads" id="wd-file-upload" />
            </div>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Assign To</Form.Label>
          <Col sm={4}>
            <Form.Control type="text" id="wd-assign-to" defaultValue={assignment.assignTo} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Due Date</Form.Label>
          <Col sm={4}>
            <Form.Control type="date" id="wd-due-date" defaultValue={assignment.dueDate}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Available From</Form.Label>
          <Col sm={4}>
            <Form.Control type="date" id="wd-available-from" defaultValue={assignment.availableFrom} />
          </Col>
          <Form.Label column sm={2}>Available Until</Form.Label>
          <Col sm={4}>
            <Form.Control type="date" id="wd-available-until" defaultValue={assignment.availableUntil}/>
          </Col>
        </Form.Group>

        <div className="d-flex gap-2 float-end">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
          <Button type="submit" variant="danger">Save</Button>
          <Button variant="secondary">Cancel</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
