// https://date-fns.org/v2.16.1/docs/format

import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>This {format(date, 'Do')} day of {format(date, 'MMMM, yyy')}</time>;
}