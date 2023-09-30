import React from 'react';

const SkillsCarousel = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Node.'];


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-4xl font-bold text-white mb-8">Skills</h1>
      <div className="flex overflow-x-auto">

      </div>
    </div>
  );
};

export default SkillsCarousel;