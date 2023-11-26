import { Button, Menu, message, Modal  } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { localSevice } from '../../services/LocalStoreService'
import './HamburgerBar.css'
const items = [
  {
    label: 'showtimes',
    key: 'lichchieu',
  },
  {
    label: 'movie theater',
    key: 'cumRap',
  },
  {
    label: 'News',
    key: 'tinTuc',
  },
  {
    label: 'App',
    key: 'ungDung',
  }
];

export default function HeaderMobile() {
  const [current, setCurrent] = useState('lichchieu');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const navigate = useNavigate()
  let user = useSelector((state) => state.userSlice.userInfo)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  let handleLogout = () => { 
    message.success('Logout successful!')  
    setTimeout(() => {
      localSevice.remove()
      window.location.reload()
    },500)
  }
  const showSettings = (event) => { 
    event.preventDefault();
}
  return (
    <div className='container-90 py-8 flex items-center justify-between'>
        <div id="logo">
            <Link to="/" ><img src="http://buster.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2018/02/logo.png" alt="logo" /></Link>
        </div>
        <div className="">
            <Button type="primary" onClick={showModal}>
            <div class="space-y-2">
                <span class="block w-8 h-0.5 bg-gray-50"></span>
                <span class="block w-8 h-0.5 bg-gray-50"></span>
                <span class="block w-5 h-0.5 bg-gray-50"></span>
            </div>
            </Button>
            {user ? <>
              <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className="flex items-center ml-6 mb-5">
              <img
              alt="avatar"
              className="w-8 h-8 mr-4 rounded-full ring-2 ring-offset-4 ring-violet-400 ring-offset-gray-800"
              src="https://source.unsplash.com/40x40/?portrait?1"
            />
            <h3 className="text-xl text-white font-[500]">{user.hoTen}</h3></div>
              <Menu className='bg-[#233a50] grey-light w-[70%] font-[500] text-[14px] uppercase' onClick={onClick} items={items} />
              <div className="flex justify-end">
              <Button onClick={() => { 
              handleLogout()
              }} className='text-white border-none rounded-3xl bg-red-700 font-[500] hover:text-white uppercase'>LOG out</Button>
              </div>
            </Modal>
            </> : <>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className="flex items-center ml-3 mb-5 space-x-5">
              <i class="fa fa-user-circle text-3xl text-gray-400"></i>
              <Button onClick={() => { 
                setTimeout(() => {
                  navigate('/Login')
                  handleCancel()
                }, 500)
              }} className='text-white border-none rounded-3xl bg-red-700 font-[500] hover:text-white'>LOG IN</Button>
            </div>
              <Menu className='bg-[#233a50] grey-light w-[70%] font-[500] text-[14px] uppercase' onClick={onClick} items={items} />
            </Modal>
            </>}
            
        </div>
    </div>
  )
}
