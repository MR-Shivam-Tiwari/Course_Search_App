import React, { useState } from "react";
import { ProgressBar, Card, Button } from "react-bootstrap";
import { useEnrolledCourses } from "../EnrolledCoursesContext";
const StudentDashboard = () => {
  const { enrolledCourses } = useEnrolledCourses();
  const [completedCourses, setCompletedCourses] = useState(new Set());

  const toggleCompletion = (courseId) => {
    setCompletedCourses((prevCompleted) => {
      const updatedCompleted = new Set(prevCompleted);
      if (updatedCompleted.has(courseId)) {
        updatedCompleted.delete(courseId);
      } else {
        updatedCompleted.add(courseId);
      }
      return updatedCompleted;
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">My Enrolled Courses</h1>
      <div className="row">
        {enrolledCourses.map((course) => {
          const isCompleted = completedCourses.has(course.id);
          return (
            <div key={course.id} className="col-md-4 mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={course.thumbnail}
                  alt={`${course.name} thumbnail`}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>Instructor: {course.instructor}</Card.Text>
                  <Card.Text>
                    Due Date: {new Date(course.dueDate).toLocaleDateString()}
                  </Card.Text>
                  <ProgressBar
                    now={isCompleted ? 100 : 50}
                    label={`${isCompleted ? "Completed" : "In Progress"}`}
                    style={{ height: "12px" }}
                  />
                  <Button
                    variant={isCompleted ? "outline-danger" : "outline-success"}
                    className="mt-3"
                    onClick={() => toggleCompletion(course.id)}
                  >
                    {isCompleted ? "Mark as Incomplete" : "Mark as Completed"}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentDashboard;
