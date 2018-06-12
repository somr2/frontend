import React from 'react';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({date, changeDate}) => {
  return <ReactDatePicker selected={date} onChange={changeDate} />
}

export default DatePicker