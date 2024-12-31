import { useState } from 'react';

export const useEvents = () => {
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem('events')) || {});

  const addEvent = (date, event) => {
    const dateKey = date.toISOString().split('T')[0];
    const updatedEvents = {
      ...events,
      [dateKey]: [...(events[dateKey] || []), event],
    };
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  const deleteEvent = (dateKey, index) => {
    const updatedEvents = { ...events };
    updatedEvents[dateKey].splice(index, 1);
    if (updatedEvents[dateKey].length === 0) {
      delete updatedEvents[dateKey];
    }
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  return { events, addEvent, deleteEvent };
};
