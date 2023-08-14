import React, { useEffect, useState } from 'react'
import { movieService } from '../../services/movieService'
import { Tabs } from 'antd';
import { NavLink, useParams } from 'react-router-dom';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';
const onChange = (key) => {
  console.log(key);
};
export default function TabDesktop() {
    let user = useSelector((state) => {
        return state.userSlice.userInfo;
      });
      const [heThongRap, setHeThongRap] = useState([])
        useEffect(() => { 
            movieService.getInforToTheater()
            .then((res) => { 
              setHeThongRap(res.data.content)
              // console.log('res.data.content: ', res.data.content);
            })
            .catch((err) => { 
              
             })
        }, [])
        let renderDSP = (danhSachPhim) => { 
          return danhSachPhim.map((phim) => { 
            return (
            <div className="p-3">
              <div className="flex space-x-5 flex-wrap items-center">
                <div className="image">
                  <img className='w-[100px] h-[126px] object-center' src={phim.hinhAnh} alt="" />
                </div>
                <div className="w-auto">
                  <div className="flex items-center space-x-2 text-white">
                    <div className="w-14 h-7 text-center ">
                      <p className='rounded-md w-full h-full bg-[#dbf836aa] font-[500] text-[18px]'>C18</p>
                    </div>
                    <p className='uppercase text-[16px] font-[500] text-[#dcf836]'>{phim.tenPhim}</p>
                  </div>
                    <div className="grid grid-cols-2 gap-2 py-5" >
                      {user ? <>{phim.lstLichChieuTheoPhim.slice(0,4).map((lichChieu) => { 
                        return (
                          <NavLink
                            to={`/buy-tickets/${lichChieu.maLichChieu}`}
                          >
                          <div className="text-white rounded bg-[#428baa] leading-10 h-10 text-center px-3 text-[11px]">
                          {moment(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY")}
                        </div>
                        </NavLink>
                      )
                      })} </> : <>{phim.lstLichChieuTheoPhim.slice(0,4).map((lichChieu) => { 
                        return (
                          <NavLink
                            to={`/login`}
                          >
                          <div className="text-white rounded bg-[#428baa] leading-10 h-10 text-center px-3 text-[11px]">
                          {moment(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY")}
                        </div>
                        </NavLink>
                      )
                      })}</>}
                      
                    </div>
                </div>
              </div>
            </div>
            )
          })
        }
        let renderHeThongRap = () => { 
          return heThongRap.map((heThong, index) => { 
            return {
              key: index, 
              label: <img className='w-[50px] h-[50px] object-cover' src={heThong.logo} alt='hinhanh' />,
              children:  (<Tabs className='h-[600px]' tabPosition='left' defaultActiveKey="1" items={heThong.lstCumRap.map((cumRap, index) => { 
                return{
                  key: cumRap.tenCumRap, 
                  label: (
                    <div className=' whitespace-normal text-left'>
                      <p className=' text-[#dbf836aa] uppercase font-[500]'>{cumRap.tenCumRap}</p>
                      <p className='text-[#ffffffaa] truncate my-1'>{cumRap.diaChi.length > 40 ? cumRap.diaChi.slice(0,40) + '...' : cumRap.diaChi}</p>
                      <p className='text-[#428baa]'>[Detail]</p>
                    </div>
                  ),
                  children: <div className="scroll-bar scroll-smooth" style={{ overflowY: "scroll", height: 600 }}>
                    {renderDSP(cumRap.danhSachPhim)}
                  </div>
                }
               })}/>)
            }
           })
         }
      return (
        <div className="dark-theme py-[60px]">
          <div className="container-80">
          <div className="uppercase text-[26px] text-white font-[500]">MOVIE THEATER</div>
            <div className="shadow-2xl my-10">
              <Tabs tabPosition='left' defaultActiveKey="1" items={renderHeThongRap()} onChange={onChange} />
            </div>
          </div>
        </div>
      )
}
