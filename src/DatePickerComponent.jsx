// DatePickerComponent.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for styling

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="date-picker">
      <h2>Заявки на дату:</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        className="date-input"
      />
    </div>
  );
};

export default DatePickerComponent;
