
import React, { createContext, useState, useContext } from 'react';

const EnrolledCoursesContext = createContext();

export const useEnrolledCourses = () => useContext(EnrolledCoursesContext);

export const EnrolledCoursesProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (course) => {
    if (!enrolledCourses.some((c) => c.id === course.id)) {
      setEnrolledCourses((prevCourses) => [...prevCourses, course]);
    }
  };

  return (
    <EnrolledCoursesContext.Provider value={{ enrolledCourses, enrollCourse }}>
      {children}
    </EnrolledCoursesContext.Provider>
  );
};
