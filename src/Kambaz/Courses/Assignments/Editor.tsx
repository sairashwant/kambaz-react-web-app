import { Col, Form, Row, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control id="wd-name" value="A1 - ENV + HTML" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-description">Description</Form.Label>
          <Form.Control
            as="textarea"
            id="wd-description"
            className="w-50"
            rows={3}
            defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.

            The landing page should be the Kambaz application with a link to the Lab exercises.

            Lab 1 should be the landing page of the Lab exercises and should include the following:

            Your full name and section
            Links to each of the lab assignments
            Link to the Kambaz application
            Links to all relevant source code repositories
            The Kambaz application should include a link to navigate back to the landing page."
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Points</Form.Label>
          <Col sm={4}>
            <Form.Control defaultValue={100} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Assignment Group</Form.Label>
          <Col sm={4}>
            <Form.Select>
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
            <Form.Select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
              <option value="Points Earned">Points Earned</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Submission Type</Form.Label>
          <Col sm={10}>
            <Form.Select id="wd-submission-type">
              <option value="Online">Online</option>
            </Form.Select>

            <Form.Label className="mt-2">Online entry options</Form.Label>
            <div>
              <Form.Check type="checkbox" label="Text Entry" id="wd-text-entry" />
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
            <Form.Control type="text" id="wd-assign-to" defaultValue="Everyone" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Due Date</Form.Label>
          <Col sm={4}>
            <Form.Control type="date" id="wd-due-date" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Available From</Form.Label>
          <Col sm={4}>
            <Form.Control type="date" id="wd-available-from" />
          </Col>
          <Form.Label column sm={2}>Available Until</Form.Label>
          <Col sm={4}>
            <Form.Control type="date" id="wd-available-until" />
          </Col>
        </Form.Group>

        <div className="d-flex gap-2 float-end">
          <Button type="submit" variant="danger">Save</Button>
          <Button variant="secondary">Cancel</Button>
        </div>
      </Form>
    </div>
  );
}
