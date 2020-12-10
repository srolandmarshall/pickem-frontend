import React from 'react'
import ListTeam from './ListTeams'

const League = (props) => {
  const {_id, name, teams} = props.data

  return (
    <div>
      <span id={_id}>{name}</span>
      <ul>
        <ListTeam teams={teams} />
      </ul>
    </div>
  )
}

export default League