import React from 'react'
import { Col, Row } from 'antd'
export default function FooterMobile() {
  return (
    <Row gutter={52}>
          <Col span={24}>
            <div className="logo mb-10">
              <img src="./img/logo.png" alt="" />
            </div>
            <div className="text-[#abb7c4] text-[14px] tracking-wider">
            5th Avenue st, manhattan
            New York, NY 10001
            </div>
            <div className="text-[#abb7c4] text-[14px] tracking-wider mt-6">
              Call us: <span className='text-white text-xl'>(+01) 202 342 6789</span>
            </div>
          </Col>
          <Col span={12}>
            <p className='text-[16px] font-bold text-white mt-4'>Resources</p>
            <ul className='text-[#abb7c4] tracking-wider mt-6'>
              <li><a className='transition-all duration-700 hover:text-[#dcf836]' href="#">About Block Buster</a></li>
              <li className='mt-1 '><a className='transition-all duration-700 hover:text-[#dcf836]' href="#">Contact Us</a></li>
              <li className='mt-1 '><a className='transition-all duration-700 hover:text-[#dcf836]' href="#">Forums</a></li>
              <li className='mt-1 '><a className='transition-all duration-700 hover:text-[#dcf836]' href="#">Blog</a></li>
              <li className='mt-1 '><a className='transition-all duration-700 hover:text-[#dcf836]' href="#">Help Center</a></li>
            </ul>
          </Col>
          <Col span={12}>
              <p className='text-[16px] font-bold text-white mt-4'>Account</p>
              <ul className='text-[#abb7c4] tracking-wider mt-6'>
                <li><a  className='transition-all duration-700 hover:text-[#dcf836]' href="#">My Account</a></li>
                <li className='mt-1'><a  className='transition-all duration-700 hover:text-[#dcf836]' href="#">Watchlist</a></li>
                <li className='mt-1'><a  className='transition-all duration-700 hover:text-[#dcf836]' href="#">Collections</a></li>
                <li className='mt-1'><a  className='transition-all duration-700 hover:text-[#dcf836]' href="#">User Guide</a></li>
              </ul>
          </Col>
          <Col span={12}>
              <p className='text-[16px] font-bold text-white mt-4'>Legal</p>
              <ul className='text-[#abb7c4] tracking-wider mt-6'>
                <li><a className='transition-all duration-700 hover:text-[#dcf836]' href="#">Terms of Use</a></li>
                <li className='mt-1'><a className='transition-all duration-700 hover:text-[#dcf836]' href="#">Privacy Policy</a></li>
                <li className='mt-1'><a className='transition-all duration-700 hover:text-[#dcf836]' href="#">Security</a></li>
              </ul>
          </Col>
          <Col span={24}>
            <p className='text-[16px] font-bold text-white mt-4'>Newsletter</p>
            <p className='text-[#abb7c4] tracking-wide mt-6'>Subscribe to our newsletter system now to get latest news from us</p>
            <form action="">
              <input className='footer' type="text" placeholder='Enter your email' required/>   
              <div className="cursor-pointer text-[#dd003f] transition-all duration-700 hover:text-[#dcf836]">
                <button className=' font-bold border-none mt-1'>SUBSCRIBE NOW</button>
                <i class="fa fa-angle-right ml-2"></i>
              </div>
            </form>       
          </Col>
    </Row>
  )
}
