import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import courses from '../courses'; 
import { useEnrolledCourses } from '../EnrolledCoursesContext';

const CourseDetail = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const { enrollCourse } = useEnrolledCourses();
  const course = courses.find((course) => course.id.toString() === id);

  const handleEnrollment = () => {
    enrollCourse(course);
    navigate('/dashboard'); 
  };

  return (
    <Container className="mt-5">
      {course ? (
        <Row>
          <Col md={6} className="mb-4">
            <Image src={course.thumbnail} alt={`${course.name} thumbnail`} fluid rounded />
          </Col>
          <Col md={6}>
            <h2 className="mb-3">{course.name}</h2>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Instructor:</strong> {course.instructor}</ListGroup.Item>
              <ListGroup.Item><strong>Description:</strong> {course.description}</ListGroup.Item>
              <ListGroup.Item><strong>Status:</strong> {course.enrollmentStatus}</ListGroup.Item>
              <ListGroup.Item><strong>Duration:</strong> {course.duration}</ListGroup.Item>
              <ListGroup.Item><strong>Schedule:</strong> {course.schedule}</ListGroup.Item>
              <ListGroup.Item><strong>Location:</strong> {course.location}</ListGroup.Item>
              <ListGroup.Item><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" onClick={handleEnrollment} className="mt-3">Enroll</Button>
          </Col>
        </Row>
      ) : (
        <p>Course not found.</p>
      )}
    </Container>
  );
};

export default CourseDetail;
