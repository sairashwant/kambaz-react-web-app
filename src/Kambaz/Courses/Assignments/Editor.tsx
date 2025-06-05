import { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const isNew = aid === "new";

  const existingAssignment = assignments.find((a: any) => a._id === aid);

  const [formData, setFormData] = useState({
    title: existingAssignment?.title || "",
    description: existingAssignment?.description || "",
    points: existingAssignment?.points || "",
    dueDate: existingAssignment?.dueDate || "",
    availableFrom: existingAssignment?.availableFrom || "",
    availableUntil: existingAssignment?.availableUntil || "",
    group: existingAssignment?.group || "Assignments",
    displayGrade: existingAssignment?.displayGrade || "Percentage",
    submissionType: existingAssignment?.submissionType || "Online",
    assignTo: existingAssignment?.assignTo || "Everyone",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    const updatedAssignment = {
      _id: isNew ? uuidv4() : aid,
      course: cid,
      ...formData,
    };

    if (isNew) {
      dispatch(addAssignment(updatedAssignment));
    } else {
      dispatch(updateAssignment(updatedAssignment));
    }

    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  if (!isNew && !existingAssignment) {
    return <div className="p-3">Assignment not found.</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            className="w-50"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Points</Form.Label>
          <Col sm={4}>
            <Form.Control
              value={formData.points}
              onChange={(e) => handleChange("points", e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Assignment Group</Form.Label>
          <Col sm={4}>
            <Form.Select
              value={formData.group}
              onChange={(e) => handleChange("group", e.target.value)}
            >
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
            <Form.Select
              value={formData.displayGrade}
              onChange={(e) => handleChange("displayGrade", e.target.value)}
            >
              <option value="Percentage">Percentage</option>
              <option value="Points Earned">Points Earned</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Submission Type</Form.Label>
          <Col sm={10}>
            <Form.Select
              value={formData.submissionType}
              onChange={(e) => handleChange("submissionType", e.target.value)}
            >
              <option value="Online">Online</option>
            </Form.Select>

            <Form.Label className="mt-2">Online entry options</Form.Label>
            <div>
              <Form.Check type="checkbox" label="Text Entry" />
              <Form.Check type="checkbox" label="Website URL" />
              <Form.Check type="checkbox" label="Media Recordings" />
              <Form.Check type="checkbox" label="Student Annotation" />
              <Form.Check type="checkbox" label="File Uploads" />
            </div>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Assign To</Form.Label>
          <Col sm={4}>
            <Form.Control
              type="text"
              value={formData.assignTo}
              onChange={(e) => handleChange("assignTo", e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Due Date</Form.Label>
          <Col sm={4}>
            <Form.Control
              type="date"
              value={formData.dueDate}
              onChange={(e) => handleChange("dueDate", e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Available From</Form.Label>
          <Col sm={4}>
            <Form.Control
              type="date"
              value={formData.availableFrom}
              onChange={(e) => handleChange("availableFrom", e.target.value)}
            />
          </Col>
          <Form.Label column sm={2}>Available Until</Form.Label>
          <Col sm={4}>
            <Form.Control
              type="date"
              value={formData.availableUntil}
              onChange={(e) => handleChange("availableUntil", e.target.value)}
            />
          </Col>
        </Form.Group>

        <div className="d-flex gap-2 float-end">
          <Button type="button" variant="danger" onClick={handleSave}>Save</Button>
          <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
        </div>
      </Form>
    </div>
  );
}