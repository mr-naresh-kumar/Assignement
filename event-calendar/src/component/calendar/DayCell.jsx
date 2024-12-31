import React from 'react';

const DayCell = ({ day, onClick }) => {
  const isToday = new Date().toDateString() === day.date.toDateString();

  return (
    <div
      className={`p-4 border rounded-lg cursor-pointer ${isToday ? 'bg-blue-100' : ''}`}
      onClick={onClick}
    >
      {day.date.getDate()}
    </div>
  );
};

export default DayCell;
