import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { movieService } from '../../services/movieService';
import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment/moment';
const onChange = (key) => {
  console.log(key);
};
export default function TabDetail(props) {
    let user = useSelector((state) => {
        return state.userSlice.userInfo;
    });
    const [theaterDetail, setThearterDetail] = useState(null);
    useEffect(() => { 
        movieService.getDetailInforFilmAndTheater(props.id)
        .then((res) => { 
            setThearterDetail(res.data.content)
        })
        .catch((err) => { 
            console.log('err: ', err);
        })
    },[props.id])
    const handleRenderLogoTheater = () => {
        return theaterDetail?.heThongRapChieu.map((item) => {
          return {
            key: item.maHeThongRap,
            label: <img className='w-[50px] h-[50px] object-cover' src={item.logo} alt='hinhanh' />,
            children: <div>{handleTimeAndAdress(item)}</div>,
          };
        });
      };
      const handleTimeAndAdress = (item) => {
        return item.cumRapChieu.map((cumRap, index) => {
          return (
            <div key={index} className="">
                <p className=' text-[#dbf836aa] uppercase font-[500]'>{cumRap.tenCumRap}</p>
              <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-4 my-4">
                {cumRap.lichChieuPhim.slice(0, 6).map((item, index) => {
                  return user ? (
                    <NavLink
                    id='buy'
                    key={item.maLichChieu}
                    to={`/buy-tickets/${item.maLichChieu}`}
                  >
                    <div className="grid grid-cols-1 gap-2" >
                        <div className="text-white rounded bg-[#428baa] leading-10 h-10 text-center px-3 text-[11px]">
                          {moment(item.ngayChieuGioChieu).format("DD/MM/YYYY")}
                        </div>
                    </div>
              </NavLink>
                  ) : (
                    <NavLink
                    id='buy'
                    to='/login'
                  >
                    <div className="grid grid-cols-1 gap-2" >
                        <div className="text-white rounded bg-[#428baa] leading-10 h-10 text-center px-3 text-base">
                          {moment(item.ngayChieuGioChieu).format("DD/MM/YYYY")}
                        </div>
                    </div>
              </NavLink>
                  );
                })}
              </div>
            </div>
          );
        });
      };
  return (
    <div className='h-[380px]'>
        <div className="container-80">
            <div className="uppercase text-[26px] text-white font-[500]">MOVIE THEATER</div>
                <div className="my-10">
                <Tabs
                defaultActiveKey="1"
                items={handleRenderLogoTheater()}
                tabPosition="left"
                onChange={onChange}
                />
                </div>
            </div>
    </div>
  )
}
