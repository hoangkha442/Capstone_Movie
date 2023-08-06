import { Button, message } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { localSevice } from '../../services/LocalStoreService'

export default function UserAction() {
  const navigate = useNavigate()
  let user = useSelector((state) => state.userSlice.userInfo)
  // console.log('user: ', user);
  let handleLogout = () => { 
    message.success('Logout successful!')  
    setTimeout(() => {
      localSevice.remove()
      window.location.reload()
    },500)
  }
  return (
    <div id='userAction'>
        {!user ? <>
          <a className='grey-light font-[500] mr-5 hover:text-[#dcf836] transition-all' href="">MY ACCOUNT</a>
        <Button onClick={() => { 
          setTimeout(() => {
            navigate('/Login')
          }, 500)
         }} className='text-white border-none rounded-3xl bg-red-700 font-[500] hover:text-white'>LOG IN</Button>
        </> : 
        <>
        <a className='grey-light font-[500] mr-5 hover:text-[#dcf836] transition-all' href="">{user.hoTen}</a>
        <Button onClick={() => { 
          handleLogout()
         }} className='text-white border-none rounded-3xl bg-red-700 font-[500] hover:text-white uppercase'>LOG out</Button>
        </>
        }
    </div>
  )
}
