import React, { useState , useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function MyCalendar(props) {
  const [value, onChange] = useState(new Date());
  return (
    <div className="container center calendar">
      <Calendar
        onChange={onChange}
        value={value}
        calendarType={'Hebrew'}
      />
    </div>
  );
}

export default MyCalendar;