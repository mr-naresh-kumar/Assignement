export const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
  
    return Array.from({ length: days }, (_, i) => ({
      date: new Date(year, month, i + 1),
    }));
  };
  