import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
   const data = useLoaderData()
  return (
   <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
   <h1>{data.name}</h1>
   <h2>{data.bio}</h2>
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const gitHubUser =async ()=>{
    const response = await fetch('https://api.github.com/users/usaid-anxari');
    console.log(response);
    return response.json()
}