// src/pages/Lesson.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const lessonsData = {
  1: [
    { id: 1, title: 'Lesson 1', videoUrl: 'https://www.example.com/lesson1.mp4', description: 'Description for Lesson 1' },
    { id: 2, title: 'Lesson 2', videoUrl: 'https://www.example.com/lesson2.mp4', description: 'Description for Lesson 2' },
    { id: 3, title: 'Lesson 3', videoUrl: 'https://www.example.com/lesson3.mp4', description: 'Description for Lesson 3' }
  ],
  2: [
    { id: 1, title: 'Lesson A', videoUrl: 'https://www.example.com/lessonA.mp4', description: 'Description for Lesson A' },
    { id: 2, title: 'Lesson B', videoUrl: 'https://www.example.com/lessonB.mp4', description: 'Description for Lesson B' },
    { id: 3, title: 'Lesson C', videoUrl: 'https://www.example.com/lessonC.mp4', description: 'Description for Lesson C' }
  ]
  // Add more lessons as needed
};

const Lesson = () => {
  const { courseId, lessonId } = useParams();
  const lessons = lessonsData[courseId];
  const lesson = lessons.find(lesson => lesson.id === parseInt(lessonId));

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="container mx-auto p-4 my-8 flex">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-1/3' : 'w-12'} transition-width duration-300 bg-gray-100 p-4`}>
        <button
          className="text-gray-600 hover:text-gray-900 mb-4"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <i className={`fas fa-${isSidebarOpen ? 'chevron-left' : 'chevron-right'}`}></i>
        </button>
        {isSidebarOpen && (
          <div>
            <h4 className="text-xl font-semibold mb-4">Other Lessons in this Course:</h4>
            <div className="space-y-4">
              {lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  to={`/courses/${courseId}/lesson/${lesson.id}`}
                  className="block text-center p-2 bg-blue-200 rounded-lg hover:bg-blue-300 hover:shadow-lg transition"
                >
                  {lesson.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Main content */}
      <div className={`${isSidebarOpen ? 'w-2/3' : 'w-full'} transition-width duration-300 pl-4`}>
        <h2 className="text-3xl font-bold mb-2">{`Course ${courseId}`}</h2>
        <h3 className="text-2xl font-semibold mb-4">{lesson.title}</h3>
        <div className="bg-gray-200 rounded-lg overflow-hidden mb-4">
          <video controls className="w-full h-auto">
            <source src={lesson.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="mb-4">{lesson.description}</p>
      </div>
    </div>
  );
};

export default Lesson;
