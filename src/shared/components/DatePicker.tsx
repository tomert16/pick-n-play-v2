import React from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  DatePickerProps,
  DatePicker as MuiDatePicker,
} from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";

// interface CustomDatePickeProps<TDate> extends DatePickerProps<TDate> {
//   placeholder?: string;
// }

const DatePicker = ({ placeholder = "Date of birth", ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MuiDatePicker
        {...props}
        slotProps={{
          textField: {
            placeholder: placeholder,
            autoComplete: "bday",
            fullWidth: true,
            required: true,
            sx: { mb: 2 },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
