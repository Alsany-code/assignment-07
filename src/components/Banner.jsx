import React from 'react';
import './Banner.css';

const Banner = ({ inProgressCount, resolvedCount }) => {
  const baseCardClasses =
    'card flex-1 rounded-xl p-8 relative overflow-hidden text-white font-bold shadow-lg transition-transform duration-300 hover:scale-[1.02] flex flex-col justify-center items-center h-48';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* In-Progress Card */}
      <div className={`${baseCardClasses} bg-gradient-to-r from-[#632EE3] to-[#9F62F2]`}>
        <h3 className="text-2xl mb-2">In-Progress</h3>
        <p className="text-6xl">{inProgressCount}</p>
      </div>

      {/* Resolved Card */}
      <div className={`${baseCardClasses} bg-gradient-to-r from-[#54CF68] to-[#00827A]`}>
        <h3 className="text-2xl mb-2">Resolved</h3>
        <p className="text-6xl">{resolvedCount}</p>
      </div>
    </div>
  );
};

export default Banner;
