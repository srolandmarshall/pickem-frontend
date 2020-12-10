import React from 'react';
import useAxios from 'axios-hooks'

import Team from './Team'

const ListTeam = ({ teams }) => {

  return (
    <ul>
      {
        teams &&
          teams.length > 0 ?
            (
              teams.map(t => {
                return (
                  <li><Team data={t}/></li>
                )
              })
            )
            :
            (
              <li>No Team(s) left</li>
            )
      }
    </ul>
  )
}

export default ListTeam