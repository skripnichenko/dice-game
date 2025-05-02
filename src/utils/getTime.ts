export const getTime = (dateInput: Date) => {
    return dateInput.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
  }