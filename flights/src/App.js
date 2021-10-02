import React, { useState } from 'react';
import SearchFlight from './components/SearchFlight';
import FlightList from './components/FlightList';

const flights = [
  {
  logo: 'https://s3-symbol-logo.tradingview.com/air-canada--600.png',
  time: {
    departure: 'Fri Oct 01 2021 14:20:37 GMT-0400 (Eastern Daylight Time)', 
    arrival: 'Sat Oct 02 2021 12:15:37 GMT-0400 (Eastern Daylight Time)',
    duration: '21:55:00.0'
    },
  price: 1456
  },
  {
    logo: 'https://s3-symbol-logo.tradingview.com/air-canada--600.png',
    time: {
      departure: 'Fri Oct 01 2021 13:20:37 GMT-0400 (Eastern Daylight Time)', 
      arrival: 'Sat Oct 02 2021 12:15:37 GMT-0400 (Eastern Daylight Time)',
      duration: '21:55:00.0'
      },
    price: 1875
  },
  {
    logo: 'https://s3-symbol-logo.tradingview.com/air-canada--600.png',
    time: {
      departure: 'Fri Oct 01 2021 13:20:37 GMT-0400 (Eastern Daylight Time)', 
      arrival: 'Sat Oct 02 2021 12:15:37 GMT-0400 (Eastern Daylight Time)',
      duration: '21:55:00.0'
      },
    price: 2445
    }  
]

function App() {
  const [page, setPage] = useState({
    searching: true,
    flights: true
  })

  return (
    <div className="App">
      {page.searching && <SearchFlight />}
      {page.flights && <FlightList flights={flights}/>}  
    </div>
  );
}

export default App;
