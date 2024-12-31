import React from 'react';
import { useEvents } from '../../hooks/useEvents';

const EventList = ({ day, onClose }) => {
  const { events, deleteEvent } = useEvents();
  const dateKey = day.date.toISOString().split('T')[0];
  const dayEvents = events[dateKey] || [];

  const handleDelete = (index) => {
    deleteEvent(dateKey, index);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Events for {day.date.toDateString()}</h2>

        {dayEvents.length > 0 ? (
          <ul className="space-y-4">
            {dayEvents.map((event, index) => (
              <li key={index} className="p-4 border rounded shadow-sm">
                <h3 className="text-md font-semibold">{event.name}</h3>
                <p className="text-sm">
                  {event.startTime} - {event.endTime}
                </p>
                {event.description && <p className="text-sm mt-1">{event.description}</p>}
                <button
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No events scheduled for this day.</p>
        )}

        <button
          className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EventList;
