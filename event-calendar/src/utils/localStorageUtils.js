

// Save events to localStorage
export const saveEventsToLocalStorage = (events) => {
    try {
      localStorage.setItem('events', JSON.stringify(events));
    } catch (error) {
      console.error('Error saving events to localStorage', error);
    }
  };
  
  // Load events from localStorage
  export const loadEventsFromLocalStorage = () => {
    try {
      const events = localStorage.getItem('events');
      return events ? JSON.parse(events) : [];
    } catch (error) {
      console.error('Error loading events from localStorage', error);
      return [];
    }
  };
  
  // Remove a specific event from localStorage
  export const removeEventFromLocalStorage = (eventId) => {
    try {
      const events = loadEventsFromLocalStorage();
      const updatedEvents = events.filter(event => event.id !== eventId); // Remove the event by its id
      saveEventsToLocalStorage(updatedEvents); // Save the updated events back to localStorage
    } catch (error) {
      console.error('Error removing event from localStorage', error);
    }
  };
  