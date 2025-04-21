import React from 'react';

// Creating a component that renders a placeholder image with appropriate styling
export const TeacherImage: React.FC<{
  className?: string;
  alt?: string;
}> = ({ className = "", alt = "ESL Teacher" }) => {
  return (
    <div 
      className={`bg-gradient-to-r from-primary/90 to-secondary/90 rounded-lg shadow-lg flex items-center justify-center ${className}`}
      style={{ minHeight: "300px" }}
    >
      <div className="text-white text-center p-8">
        <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-3xl font-bold">D</span>
        </div>
        <p className="font-medium text-lg">Dave</p>
        <p className="text-sm opacity-80">ESL Teacher</p>
      </div>
    </div>
  );
};

export default TeacherImage;