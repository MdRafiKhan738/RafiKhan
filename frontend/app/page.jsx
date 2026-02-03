import React from 'react'
import Home from './AllPageComponents/Home'
export const serverurl=import.meta.env.VITE_SERVER_URL;
const page = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default page