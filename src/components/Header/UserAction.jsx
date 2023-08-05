import { Button } from 'antd'
import React from 'react'

export default function UserAction() {
  return (
    <div id='userAction'>
        <a className='grey-light font-[500] mr-5 hover:text-[#dcf836] transition-all' href="">MY ACCOUNT</a>
        <Button className='text-white border-none rounded-3xl bg-red-700 font-[500] hover:text-white'>LOG IN</Button>
    </div>
  )
}
