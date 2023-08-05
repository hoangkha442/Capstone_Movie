import { Button } from 'antd'
import React, { useState } from 'react'
import { Menu } from 'antd';
import UserAction from './UserAction';
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
export default function UserNav() {
  const [current, setCurrent] = useState('lichchieu');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div className="flex justify-between items-center ml-12 w-full">
      <Menu className='dark-theme grey-light w-[70%] font-[500] text-[14px] uppercase' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <UserAction className='w-[30%]'/>
    </div>
  )
}
