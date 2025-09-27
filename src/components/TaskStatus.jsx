
import React from 'react';

const TaskStatus = ({ inProgressTasks, resolvedTickets, onComplete }) => {
  return (
    <div className=" top-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-5 mt-1">Task Status</h2>
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">

          {/*  Active Tasks */}
          <div>
            {inProgressTasks.length === 0 ? (
              <p className="text-gray-500 italic">Select a ticket to add to Task Status</p>
            ) : (
              inProgressTasks.map((task) => (
                <div key={task.id} className="justify-between items-center py-2 ">
                  <span className="text-l font-bold ">
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


        </div>
      </div>

      <div>
        {/* Resolved List */}
        <h3 className="text-2xl font-bold mb-3 pt-4">Resolved List</h3>
        <div>
          {resolvedTickets.length === 0 ? (
            <p className="text-gray-500 italic">No resolved tasks yet.</p>
          ) : (
            resolvedTickets.map((ticket) => (
              <div key={ticket.id} className="flex justify-between gap-2 items-center mt-1 text-l font-semibold bg-white p-4 rounded-lg shadow-md border-b border-gray-200  ">
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