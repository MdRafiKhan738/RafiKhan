import React from 'react'
import Home from './AllPageComponents/Home'
export const serverurl = process.env.NEXT_PUBLIC_SERVER_URL

const page = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default page