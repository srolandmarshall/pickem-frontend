import React from 'react'

const Team = (props) => {
 
  const {_id, city, name, abr, conf, div} = props.data

  return (
    <span id={_id}>{city} {name}</span>
  )
}

export default Team