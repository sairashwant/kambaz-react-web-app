import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { useParams, Link } from "react-router-dom";

export default function AssignmentControl() {
  const { cid } = useParams();

  return (
    <Row className="align-items-center">
      <Col xs="auto">
        <InputGroup style={{ maxWidth: "300px" }}>
          <InputGroup.Text>
            <AiOutlineSearch />
          </InputGroup.Text>
          <FormControl placeholder="Search for Assignments" />
        </InputGroup>
      </Col>

      <Col className="d-flex justify-content-end gap-2">
        <Button variant="outline-secondary">+ Group</Button>

        <Link to={`/Kambaz/Courses/${cid}/Assignments/new`}>
          <Button variant="danger">+ Assignment</Button>
        </Link>
      </Col>
    </Row>
  );
}
