// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CourseListing from './Components/CourseListing';
import CourseDetail from './Components/CourseDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

import StudentDashboard from './Components/StudentDashboard ';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CourseListing />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/dashboard" element={<StudentDashboard />} /> 
      </Routes>
    </div>
  );
}

export default App;
