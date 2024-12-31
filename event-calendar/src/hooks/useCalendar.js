import { useState } from 'react';
import { getDaysInMonth } from '../utils/dateUtils';

export const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const days = getDaysInMonth(currentDate);

  const nextMonth = () => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  const prevMonth = () => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));

  return {
    currentMonth: currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    days,
    nextMonth,
    prevMonth,
  };
};







