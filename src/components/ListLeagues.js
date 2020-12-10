import React from 'react';
import useAxios from 'axios-hooks'

import League from './League'

const ListLeagues = () => {
  const [{data,loading,error}] = useAxios('/api/leagues')
  const leagues = data

  if (loading) return <h2>Loading...</h2>
  if (error) return <h3>Something went wrong!</h3>
  return (
    <ul>
      {
        leagues &&
          leagues.length > 0 ?
            (
              leagues.map(l => {
                return (
                  <li><League data={l}/></li>
                )
              })
            )
            :
            (
              <li>No Leagues left</li>
            )
      }
    </ul>
  )
}

export default ListLeagues