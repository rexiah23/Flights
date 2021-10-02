import React from 'react'; 
import './Flight.css';

const Flight = props => {
  const {logo, time, price} = props;

  return (
    <section className="flight">
      <img src={logo} alt="airline logo" width="50px" height="50px"/> 
      <p>{time.departure} - {time.arrival}</p>
      <p>{time.duration}</p>
      <p><strong>${price}</strong></p>
    </section>
  )
}

export default Flight;