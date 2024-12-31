
import React from 'react';

const CalendarGrid = ({ days, onDayClick, selectedDay }) => {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in string format.
  
  return (
    <div className="grid grid-cols-7 gap-4">
      {days.map((day, index) => {
        const dayISO = day.date.toISOString().split('T')[0]; // Convert day to string  format.
        const isToday = dayISO === today; // Check if the day is today.
        const isSelected = selectedDay && dayISO === selectedDay.toISOString().split('T')[0]; // Check if the day is selected.

        const isWeekend = day.date.getDay() === 0 || day.date.getDay() === 6; // Sunday (0) or Saturday (6)

        return (
          <div
            key={index}
            className={`p-4 rounded-lg cursor-pointer text-center transition 
              ${isToday ? 'bg-blue-200 font-bold border-blue-500' : 'bg-gray-100'} 
              ${isSelected ? 'bg-green-300 border-green-500' : ''} 
              ${isWeekend ? 'bg-red-100' : ''} 
              hover:bg-blue-300`}
            onClick={() => onDayClick(day.date)}
          >
            <span className="text-lg font-semibold">{day.date.getDate()}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarGrid;


  
