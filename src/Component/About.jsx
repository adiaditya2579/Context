import React, { useContext } from 'react'
import { useParams,Link, Navigate, useNavigate } from 'react-router-dom'
import { UserContext } from '../Utils/Context';
function About() {
  let {id}= useParams()
  const  {user} = useContext(UserContext)
  const navigate = useNavigate()
  return (
    <div>
      <h1>{user[id].name}</h1>
      <h3>{user[id].city}</h3>
      <Link onClick={()=> navigate(-1)}  >Go back</Link>
    </div>
  )
}

export default About