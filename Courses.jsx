import React from 'react';
import { Link } from 'react-router-dom';

const coursesData = [
  { id: 1, name: 'Arabic Course', description: 'In this course you will learn all Arabic lessons of all classes of the secondary school' },
  { id: 2, name: 'English Course', description: 'In this course you will learn all English lessons of all classes of the secondary school' },
];

const Courses = () => {
  return (
    <div className="container mx-auto p-4 my-8">
      <h2 className="text-3xl font-bold mb-8">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {coursesData.map((course) => (
          <Link
            key={course.id}
            to={`/courses/${course.id}/lesson/1`} // Directly link to the first lesson of the course
            className="p-4 bg-blue-200 rounded-lg hover:bg-blue-300 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2">{course.name}</h3>
            <p>{course.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
