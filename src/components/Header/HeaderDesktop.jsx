import React from 'react'
import { Link } from 'react-router-dom'
import UserNav from './UserNav'

export default function HeaderDesktop() {
  return (
    <div className='container-80 py-8 flex items-center'>
        <div id="logo">
            <Link to="/" ><img src="http://buster.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2018/02/logo.png" alt="logo" /></Link>
        </div>
        <UserNav />
    </div>
  )
}
