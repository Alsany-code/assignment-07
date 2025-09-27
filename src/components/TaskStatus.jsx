
import React from 'react';

const TaskStatus = ({ inProgressTasks, resolvedTickets, onComplete }) => {
  return (
    <div className="sticky top-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-5 mt-1">Task Status</h2>
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
        
        {/*  Active Tasks */}
        <div className="pb-4 border-b border-gray-200 mb-4">
          {inProgressTasks.length === 0 ? (
            <p className="text-gray-500 italic">Select a ticket to add to Task Status</p>
          ) : (
            inProgressTasks.map((task) => (
              <div key={task.id} className="justify-between items-center py-2 ">
                <span className="text-xl font-bold ">
                  {task.title}
                </span>
                <br />
                <button
                  onClick={() => onComplete(task.id)}
                  className="px-3 py-3 text-xs font-semibold w-full my-3 text-white  bg-green-600 rounded-full hover:bg-green-600 transition duration-150"
                  aria-label={`Complete task ${task.id}`}
                >
                  Complete
                </button>
              </div>
            ))
          )}
        </div>
        
        {/* Resolved List */}
        <h3 className="text-lg font-semibold text-gray-800 mb-3 pt-4">Resolved List</h3>
        <div className="max-h-60 overflow-y-auto">
          {resolvedTickets.length === 0 ? (
            <p className="text-gray-500 italic">No resolved tasks yet.</p>
          ) : (
            resolvedTickets.map((ticket) => (
              <div key={ticket.id} className="flex justify-between items-center py-2 text-l">
                <span className="resolve">{ticket.title}</span>
                <span className="text-xs text-green-600">RESOLVED</span>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default TaskStatus;