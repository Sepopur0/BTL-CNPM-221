import React, {useState} from 'react';
import Calendar from 'react-calendar';
function View_calendar() {
    const [value, onChange] = useState(new Date());
  
    return (
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
    );
}
export default View_calendar;
