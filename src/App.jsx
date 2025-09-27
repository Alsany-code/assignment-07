
import React, { useState, useEffect } from 'react';
import { initialTickets } from './components/data';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';

const App = () => {
  // All tickets

  const [tickets, setTickets] = useState(initialTickets);

  // Tickets active
  const [inProgressTasks, setInProgressTasks] = useState([]);

  // for the main display and banner counts

  const openTickets = tickets.filter(t => t.status !== 'Resolved');
  const inProgressCount = inProgressTasks.length;
  const resolvedCount = tickets.filter(t => t.status === 'Resolved').length;

  /*Main Logic*/
  const handleAddToTask = (ticket) => {

    // Check if already in Task Status

    if (inProgressTasks.find(t => t.id === ticket.id)) {
      toast.warn(`Ticket #${ticket.id} is already In-Progress!`);
      return;
    }

    //  Add to Task Status
    setInProgressTasks(prev => [...prev, ticket]);
    
    //  Update main tickets list status to In-Progress
    setTickets(prevTickets =>
      prevTickets.map(t =>
        t.id === ticket.id ? { ...t, status: 'In-Progress' } : t
      )
    );

    // 4. Show toast notification
    toast.success(`Ticket #${ticket.id} added to Task Status! In Progress count increased.`);
  };

  /*resolve the ticket.*/
  const handleCompleteTask = (taskId) => {

    
    const completedTask = inProgressTasks.find(t => t.id === taskId);
    if (!completedTask) return;

    // Remove from Task Status
    setInProgressTasks(prev => prev.filter(t => t.id !== taskId));

    //  Update main tickets list status to Resolved and remove from customer list
    setTickets(prevTickets =>
      prevTickets.map(t =>
        t.id === taskId ? { ...t, status: 'Resolved' } : t
      )
    );
    
    // 4. Show toast notification
    toast.info(`Ticket #${taskId} Resolved! Count updated.`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/*Banner Section */}
          <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
          
          <div className="mt-10 lg:grid lg:grid-cols-3 lg:gap-10">
            
            {/* Main Section - Customer Tickets (2-column grid) */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Tickets</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {openTickets.map((ticket) => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onCardClick={handleAddToTask}
                  />
                ))}
              </div>
            </div>
            
{/* Main Section - Task Status -Right side*/}
<div className="lg:col-span-1 mt-10 lg:mt-0">
  <TaskStatus
    inProgressTasks={inProgressTasks}
    // ADD THE resolvedTickets list here
    resolvedTickets={tickets.filter(t => t.status === 'Resolved')} 
    onComplete={handleCompleteTask}
  />
</div>
          </div>
        </div>
      </main>

      {/*Footer Section */}
      <Footer />
      
      {/*  React-Toastify Container */}
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default App;