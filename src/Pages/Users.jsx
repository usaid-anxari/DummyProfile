import React from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {
   const {usersId} = useParams()
  return (
    <h1 className='bg-blue '>
      User Id is: {usersId}
    </h1>
  )
}

export default Users