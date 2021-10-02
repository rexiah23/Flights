import React, { useState } from 'react'; 

const SearchFlight = props => {
  const [searchInfo, setSearchInfo] = useState({
    from: '',
    to: '',
    arrival: '',
    departure: ''
  })

  const onSubmit = event => {
    event.preventDefault();
  }

  const onChange = event => {
    const name = event.target.name;
    const result = event.target.value; 
    setSearchInfo(prev => {
      return {
        ...prev, 
        [name]: result 
      }
    })
  }

  return (
    <form onSubmit={onSubmit}> 
      <input type='text' name='from' value={searchInfo.from} placeholder='Where from?'onChange={onChange}/> 
      <input type='text' name='to' value={searchInfo.to} placeholder='Where to?'onChange={onChange}/> 
      <input type='date' name='arrival' value={searchInfo.arrival} placeholder='Where to?'onChange={onChange}/> 
      <input type='date' name='departure' value={searchInfo.departure} placeholder='Where to?'onChange={onChange}/> 
    </form>
  )
}

export default SearchFlight; 