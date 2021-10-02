import React from 'react'; 
import Flight from './Flight'; 

const FlightList = props => {
  const { flights } = props; 
  const flightsList = flights.map(el => <Flight logo={el.logo} time={el.time} price={el.price}/>)
  

  return (
    <div>
      {flightsList}
    </div>
  )
}

export default FlightList; 