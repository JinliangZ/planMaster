import Clock from 'react-clock'
import React, { useState, useEffect } from 'react';
import 'react-clock/dist/Clock.css';
import moment from 'moment'

function MyTime() {
    const [value, setValue] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(
        () => setValue(new Date()),
        1000
      );
  
      return () => {
        clearInterval(interval);
      }
    }, []);

    const time  = moment().format('MMMM Do YYYY, h:mm:ss a');
  
    return (
      <div className="container center clock-container">
        <p>Current time: {time}</p>
        <div className = 'clock'>
            <Clock value={value} />        

        </div>
      </div>
    )
  }

  export default MyTime;