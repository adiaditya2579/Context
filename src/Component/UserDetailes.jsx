import React, { useContext } from 'react'
import { UserContext } from '../Utils/Context';
import {Link} from 'react-router-dom'

function UserDetailes() {
  let {user} = useContext(UserContext)

  return (
    <div>
      {user.map((e)=>(
        <Link to={`/user/${e.id}`} key={e.id} className=' flex gap-2 '>{e.name}</Link>
      ))}
      
    </div>
  )
}

export default UserDetailes