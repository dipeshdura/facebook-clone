import { useState } from "react";
import closeicon from '../assets/img/closeicon.png';
import PropTypes from 'prop-types';


Signup.propTypes = {
  toggle: PropTypes.func.isRequired,
};



export default function Signup(props) {
  // months
  const months = [
    "Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec"
  ];
  const [selectedMonth, setSelectedMonth] = useState('');

  const handleMonthChange=(event)=>{
   setSelectedMonth(event.target.value);
  }
  // day
  const currentDay =new Date().getDate();
  const endDay =1;

  const [selectDay , setSelectDay] = useState('');

  const dayArray =[];
  for(let day =currentDay; day >= endDay; day--){
    dayArray.push(day);
  }
  const handleDayChange =(event)=>{
    setSelectDay(event.target.value);
  }


  // year
const currentYear =new Date().getFullYear();
const startYear =1900;

const [selectYear, setSelectedYear] = useState('');

const yearArray =[];
for (let year = currentYear; year >= startYear; year--){
  yearArray.push(year);
}
const handleYearChange =(event)=>{
  setSelectedYear(event.target.value);
}
//toggle



  return (
    <>
 
    <div className="p-3">
        <div className="sign-head flex justify-between">
            <div className="left-side-head">
        <h1 className="font-bold">Sign up</h1>
        <p>It's quick and easy.</p>
            </div>
            <div className="right-side-head">
                <img src={closeicon} alt="" onClick={props.toggle}/>
            </div>
        </div>
        <div className="hr-tag">
          <hr className="m-3"/>
        </div>
        <div className="form-container">
      <form action="">
        <div className="form-panel-name flex gap-1">

        <div className="form-input ">
          <input type="text" placeholder="First name"  />
        </div>
        <div className="form-input">
          <input type="text" placeholder="Last name" />
        </div>
        </div>
        <div className="form-input-contact form-input">
          <input type="text" placeholder="Mobile number or email" />
        </div>
        <div className="form-input-password form-input">
          <input type="text" placeholder="New password"/>
        </div>
        <div className="form-input-date">
        <p>Birthday</p>
        <div className="input-date">
          <div className="input-month">
        <select name="month" id="month" value={selectedMonth} onChange={handleMonthChange}>
          {months.map((month, index) => (
            <option key={index} value={month}>{month}</option>
          ))}
        </select>
        </div>  
            <div className="input-month">
        <select name="day" id="day" value={selectDay} onChange={handleDayChange}>
          {dayArray.map((day, index)=>(
            <option key={index} value={day}>{day}</option>
          ))

          }
        </select>
        </div>
          <div className="input-month">
        <select name="year" id="year" value={selectYear} onChange={handleYearChange}>
          {yearArray.map((year, index)=>(
            <option key={index} value={year}>{year}</option>
          ))
          }
        </select>
        </div>
        </div>

        </div>

        <div className="Gender gap-3">
          <p>Gender</p>
          <div className="gender-container flex gap-3">
          <div className="form-gender">
          <label htmlFor="Female">Female</label>
          <input type="radio" name="gender" />
          </div>

          <div className="form-gender">
          <label htmlFor="Male">Male</label>
          <input type="radio" name="gender" />
          </div>

          <div className="form-gender">
          <label htmlFor="Custom">Custom</label>
          <input type="radio" name="gender" />
          </div>
          </div>
        </div>

        <div className="terms-condition">
          <div className="info-term">
          <p>People who use our service may have uploaded your contact information to Facebook Learn more </p>
          </div>
          <div className="terms-condition-information">
           <p>By clicking Sign Up, you agree to our Terms Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
           </div>
        </div>
        <div className="signup-button">
          <button>Sign Up</button>
        </div>
        </form>
        </div>
    </div>
    </>
  )
}
