import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { movieService } from '../../services/movieService'
import {  Col, Progress, Row, Menu, Button  } from 'antd';
import './Detail.css'
import TabDetail from './TabDetail';
const items = [
  {
    label: <div className='uppercase'>Overview</div>,
    key: 'Overview',
  },
  {
    label: <div className='uppercase'>Media</div>,
    key: 'Media',
  },
  {
    label: <div className='uppercase'>Related Movies</div>,
    key: 'Related Movies',
  }
]
export default function Details() {
  let {id} = useParams()
  const [detailMove, setDetailMove] = useState({})
  useEffect(() => { 
    movieService.getDetailMovie(id)
    .then((res) => { 
      setDetailMove(res.data.content)
    })
    .catch((err) => { 
    })
  },[id, setDetailMove])
  const [current, setCurrent] = useState('Overview');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div className="dark-theme h-full">
      <div className='container-80 py-20'>
      <Row gutter={32}>
        <Col lg={10} xl={8}>
          <figure className='w-64 md:w-[300px]'>
            <div className=" md:h-[470px] h-96">
              <img className='h-full object-cover rounded' alt="example" src={detailMove.hinhAnh}/>
            </div>
            <figcaption className='border-grey p-[24px]'>
              <a href={detailMove.trailer}>
              <button  className='text-sm rounded uppercase py-2 font-[500] w-full bg-red-700 text-white'><i class="fa fa-play mr-2"></i>Watch Trailer</button>
              </a>
            </figcaption>
          </figure>
        </Col>
        <Col lg={14} xl={16}>
          <h2 className='md:text-4xl text-3xl font-bold mt-5 md:mt-0 text-white'>{detailMove.tenPhim}</h2>
          <div className="flex flex-wrap justify-center md:justify-normal space-x-14 items-center">
            <Progress status="exception" className='my-8' type='circle' percent={detailMove.danhGia * 10} format={(percent) => `${percent / 10}` + '/10'}/>
            <div className="">
              <button className="text-white px-10 font-[500]  py-2 bg-red-700 rounded mt-4 mr-4 hover:opacity-80 transition duration-150 ease-in-out">
                    <a href="#buy" className="hover:text-white uppercase">
                    buy ticket
                    </a>
              </button>
            </div>
          </div>
          <Menu className='dark-theme grey-light font-[500] text-[18px]' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
          <p className='grey-light text-[16px] mt-5'>{detailMove.moTa}</p>
          <div className="flex mt-8 justify-between pb-4 border-grey-light">
            <p className='uppercase font-bold text-white'>media</p>
            <a className='text-[#428bca]' href="#">View all media</a>
          </div>
        </Col>
      </Row>
      </div>
      <div className='h-full dark-theme'>
        <TabDetail id={id}/>
      </div>
    </div>
  )
}
