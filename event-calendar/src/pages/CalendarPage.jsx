
import React, { useState, useEffect } from 'react';
import CalendarGrid from '../component/calendar/CalendarGrid';
import MonthNavigation from '../component/calendar/MonthNavigation';
import EventForm from '../component/EventModal/EventForm';
import { useCalendar } from '../hooks/useCalendar';

const CalendarPage = () => {
  const { currentMonth, days, nextMonth, prevMonth } = useCalendar();
  const [selectedDay, setSelectedDay] = useState(null);
  const [events, setEvents] = useState([]); // Events state to persist events

  // Load events from localStorage
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events'));
    if (Array.isArray(savedEvents)) {
      setEvents(savedEvents);
    } else {
      setEvents([]);
    }
  }, []);

  // Add event
  const onAddEvent = (day, eventDetails) => {
    const newEvent = { day: day.toDateString(), ...eventDetails };
    const updatedEvents = Array.isArray(events) ? [...events, newEvent] : [newEvent];
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  // Get events for the selected day
  const getEventsForSelectedDay = () => {
    if (!selectedDay) return [];
    const selectedDate = selectedDay.toDateString();
    return Array.isArray(events) ? events.filter((event) => event.day === selectedDate) : [];
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Month Navigation */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <MonthNavigation
          currentMonth={currentMonth}
          nextMonth={nextMonth}
          prevMonth={prevMonth}
        />
      </div>

      {/* Calendar Grid */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <CalendarGrid days={days} onDayClick={setSelectedDay} selectedDay={selectedDay} />
      </div>

      {/* Event Form Modal */}
      {selectedDay && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <EventForm
              day={selectedDay}
              onAddEvent={onAddEvent}
              onClose={() => setSelectedDay(null)}
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Events for {selectedDay.toDateString()}</h3>
              <ul className="list-disc pl-5">
                {getEventsForSelectedDay().map((event, index) => (
                  <li key={index} className="text-sm">
                    <strong>{event.name}</strong> ({event.startTime} - {event.endTime})
                    <p className="text-gray-500">{event.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
