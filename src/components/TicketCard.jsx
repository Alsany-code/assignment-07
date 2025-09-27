
import React from 'react';

import { FaCalendarAlt } from 'react-icons/fa'; 

const getPriorityStyles = (priority) => {
  switch (priority) {
    case 'HIGH PRIORITY':
      return 'text-red-600 bg-red-100 border-red-300';
    case 'MEDIUM PRIORITY':
      return 'text-yellow-600 bg-yellow-100 border-yellow-300';
    case 'LOW PRIORITY':
      return 'text-green-600 bg-green-100 border-green-300';
    default:
      return 'text-gray-600 bg-gray-100 border-gray-300';
  }
};

const getStatusBadge = (status) => {
  const baseStyle = "text-xs font-semibold px-2 py-0.5 rounded-full flex items-center";
  if (status === 'Open') {
    return <span className={`${baseStyle} bg-green-100 text-green-700`}><span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>Open</span>;
  }
  if (status === 'In-Progress') {
    return <span className={`${baseStyle} bg-yellow-100 text-yellow-700`}><span className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></span>In-Progress</span>;
  }
  return null; 
};

const TicketCard = ({ ticket, onCardClick }) => {
  const priorityStyle = getPriorityStyles(ticket.priority);

  return (
    
    // Clicking a card adds it to the Task Status Section
    <div
      className="bg-white p-6 rounded-lg shadow-md border-t-4 border-gray-100 cursor-pointer hover:shadow-lg transition duration-300 transform hover:scale-[1.01]"
      onClick={() => onCardClick(ticket)}
    >
      
      {/* Title and Status Badge */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800 pr-4">{ticket.title}</h3>
        {getStatusBadge(ticket.status)}
      </div>
      
      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{ticket.description}</p>
      
      <div className="flex justify-between items-center text-xs text-gray-500 mt-2 border-t pt-3">
        
        {/* Priority & Ticket ID */}
        <div className="flex flex-col">
          <span className="font-mono text-gray-700">#{ticket.id}</span>
          <span className={`mt-1 font-semibold text-xs border rounded px-1.5 py-0.5 ${priorityStyle}`}>
            {ticket.priority}
          </span>
        </div>
        
        {/* Customer & Date */}
        <div className="text-right">
          <p className="font-medium text-gray-800">{ticket.customer}</p>
         <div>
           <p className="mt-1 flex justify-center items-center">
            <FaCalendarAlt className="inline mr-1 text-gray-500" />
            {ticket.createdAt}</p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;