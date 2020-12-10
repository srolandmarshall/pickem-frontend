import React from 'react'
import Team from './Team'

const Game = (props) => {
 
  const {_id, Away, Home, AwayTeam, HomeTeam} = props.data

  if (AwayTeam && HomeTeam){
    return <span id={_id}><Team _id={AwayTeam}/> v <Team _id={HomeTeam}/></span>
  }
  return (
    <span id={_id}><Team abr={Away}/> v <Team abr={Home}/></span>
  )
}

export default Game