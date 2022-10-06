import React, { useState } from "react";
import Calendar from "react-calendar";
import './Calendar.css';

function MyCalendar(){
    const [value, onChange] = useState(new Date());

    return(
        <div>
            <Calendar onChange={onChange} value={value} />
            <div></div>
        </div>
    )
}

export default Calendar;