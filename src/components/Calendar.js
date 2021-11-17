import React, { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import '../css/CalendarDisplay.css';

function CalendarDisplay() {
  const [value, changeDate] = useState(new Date());
  console.log([value, changeDate]);
  return (
    <div id="calendar">
      <Calendar
        onClick={changeDate}
        value={value}
      />
    </div>
  )
}

export default CalendarDisplay;