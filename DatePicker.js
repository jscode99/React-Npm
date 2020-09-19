import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerEx() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <DatePicker
        selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              dateFormat='dd/MM/yyyy'
              maxDate={new Date()}
              filterDate={date => date.getDay() !== 0}
              isClearable
              showYearDropdown
              scrollableMonthYearDropdown

      />
    </div>
  );
}

export default DatePickerEx;
