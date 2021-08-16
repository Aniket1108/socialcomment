import React from 'react'


const d = new Date();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayName = days[d.getDay()];

const date = d.getDate();
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const month = months[d.getMonth()];
let year = d.getFullYear();

const TodaysDate = () => {
    return (
        <div className="todaysdate">
            <p>{dayName} , <span> {date} {month} {year} </span> </p>
        </div>
    )
}

export default TodaysDate;