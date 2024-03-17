import * as React from 'react';
import { useMemo } from 'react';
import { format } from 'date-fns';

/**
 * Use a DateLabel to display a date in a readable format.
 */
const DateLabel: React.FC<{
  /** The date to be shown. Use either a Date object or a Unix timestamp in seconds. */
  date: Date | number;

  /** The format of the date to be displayed. Refer to https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table for the format string. */
  format?: string;
}> = ({ date, format: dateFormat = 'E d LLL Y' }) => {
  const dateValue = useMemo(
    () => (typeof date === 'object' ? date : new Date(Math.ceil(date * 1000))),
    [date]
  );
  return <>{format(dateValue, dateFormat)}</>;
};

export default DateLabel;
