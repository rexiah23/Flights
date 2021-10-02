import { getFlightDuration, msToTime } from '../helpers/flight-helpers';

// flight = {
//   start: ''
// }

test("msToTime returns flight duration", () => {
  const differenceInMs1 = 43200000; 
  const differenceInMs2 = 432000; 
  const result1 = msToTime(differenceInMs1); 
  const result2 = msToTime(differenceInMs2); 
  expect(result1).toBe('12:00:00.0');
  expect(result2).toBe('00:07:12.0');
});

test("getFlightDuration returns flight duration", () => {
  const departureInMs = Date.parse('Sat Oct 01 2021 14:20:37 GMT-0400 (Eastern Daylight Time)');
  const arrivalInMs = Date.parse('Sat Oct 02 2021 12:15:37 GMT-0400 (Eastern Daylight Time)');
  const duration = msToTime(arrivalInMs-departureInMs); 
  expect(duration).toBe('21:55:00.0');
});

