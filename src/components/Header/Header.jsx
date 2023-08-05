
import React, { useState } from 'react'
import UserNav from './UserNav';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className='dark-theme'>
        <div className="container-80 py-8 flex items-center">
          <div id="logo">
            <Link to="/" ><img src="./img/logo.png" alt="logo" /></Link>
          </div>
          <UserNav />
        </div>
      </div>
    </header>
  )
}
