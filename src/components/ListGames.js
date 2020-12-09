import React from 'react';
import useAxios from 'axios-hooks'

import Team from './Team'

const ListTeam = ({ Teams, deleteTeam }) => {
  const [{data,loading,error}] = useAxios('/api/teams')
  const teams = data

  if (loading) return <h2>Loading...</h2>
  if (error) return <h3>Something went wrong!</h3>
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