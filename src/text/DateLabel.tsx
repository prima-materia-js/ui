import * as React from 'react';
import { useMemo } from 'react';
import { format } from 'date-fns';

/**
 * Use a DateLabel to display a date in a readable format.
 */
const DateLabel: React.FC<{
  /** The date to be shown. Use either a Date object, an ISO 8601-compliant date string, or a Unix timestamp in seconds. */
  date: Date | number | string;

  /** The format of the date to be displayed. Refer to https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table for the format string. */
  format?: string;
}> = ({ date, format: dateFormat = 'E d LLL Y' }) => {
  const dateValue = useMemo(() => {
    if (typeof date === 'object') {
      return date;
    }

    const dateNum = Number(date);
    if (!isNaN(dateNum)) {
      return new Date(Math.ceil(dateNum * 1000));
    } else {
      return new Date(date);
    }
  }, [date]);
  return <>{format(dateValue, dateFormat)}</>;
};

export default DateLabel;
