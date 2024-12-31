
import React from 'react';

const MonthNavigation = ({ currentMonth, nextMonth, prevMonth }) => {
  return (
    <div className="flex justify-between items-center">
      <button
        onClick={prevMonth}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Previous
      </button>
      <h2 className="text-xl font-bold">{currentMonth}</h2>
      <button
        onClick={nextMonth}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

export default MonthNavigation;
