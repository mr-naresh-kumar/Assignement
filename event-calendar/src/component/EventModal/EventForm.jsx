

import React, { useState } from 'react';

const EventForm = ({ day, onAddEvent, onClose }) => {
  // Ensure `day` is defined before accessing its properties
  const formattedDate = day ? day.toDateString() : 'No date selected';

  const [eventName, setEventName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eventName || !startTime || !endTime) {
      alert('Please fill in all required fields!');
      return;
    }

    onAddEvent(day, {
      name: eventName,
      startTime,
      endTime,
      description,
    });

    // Clear the form and close the modal
    setEventName('');
    setStartTime('');
    setEndTime('');
    setDescription('');
    onClose();
  };

  return (
    <div>
      <h3 className="text-lg font-semibold">Add Event for {formattedDate}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block text-sm font-medium">Event Name</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium">Start Time</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium">End Time</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
