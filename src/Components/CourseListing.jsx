import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  FormControl,
  InputGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import courses from "../courses"; 

const CourseListing = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <div className="d-flex align-items-center ">
        <InputGroup className="mb-3 mt-3">
          <FormControl
            placeholder="Search courses..."
            aria-label="Search courses"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
        <Link to={`/dashboard`} className="btn btn-dark ms-2 w-25">
          User Dashboard
        </Link>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Col key={course.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={course.thumbnail}
                  alt={`${course.name} thumbnail`}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>Instructor: {course.instructor}</Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="flex-grow-1">
                      <Card.Text className="mb-0">
                        Location: {course.location}
                      </Card.Text>
                    </div>
                    <Link
                      to={`/course/${course.id}`}
                      className="btn btn-primary ms-2"
                    >
                      View Details
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center w-100">No courses found.</p>
        )}
      </Row>
    </Container>
  );
};

export default CourseListing;
