import React, {useState} from 'react'
import useAxios from 'axios-hooks'


const Team = (props) => {
 
  const {abr} = props
  const [{data,loading,error}] = useAxios(`/api/teams/by_abr/${abr}`)
  const team = data
  console.log(abr +":"+ team._id);
  if (loading) return <span>Loading...</span>
  if (error) return <span>Something went wrong!</span>

  return (
    <span id={team._id}>{team.name}</span>
  )
}

export default Team