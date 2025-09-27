
import React from 'react';

const Banner = ({ inProgressCount, resolvedCount }) => {
  const baseCardClasses = 'flex-1 rounded-xl p-8 relative overflow-hidden text-white font-bold shadow-lg transition-transform duration-300 hover:scale-[1.02]';
  const patternUrl = '/vector1.png'; 

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      
    {/*  In-Progress Card  */}
      <div
        className={`${baseCardClasses} flex flex-col justify-center items-center h-48`}
        style={{
         
          backgroundImage: `url(${patternUrl}), linear-gradient(to right, #632EE3, #9F62F2)`,
          backgroundSize: 'auto',
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h3 className="text-2xl mb-2">In-Progress</h3>
        <p className="text-6xl">{inProgressCount}</p>
      </div>

      {/* Resolved Card */}
      <div
        className={`${baseCardClasses} flex flex-col justify-center items-center h-48`}
        style={{
          backgroundImage: `url(${patternUrl}), linear-gradient(to right, #54CF68, #00827A)`,
          backgroundSize: 'auto',
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h3 className="text-2xl mb-2">Resolved</h3>
        <p className="text-6xl">{resolvedCount}</p>
      </div>
    </div>
  );
};

export default Banner;