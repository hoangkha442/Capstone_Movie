import { Button, message } from 'antd';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { movieService } from '../../services/movieService';
import './BuyTicket.css'
import { setUserBookTickets } from '../../redux/userSlice';
export default function BuyTicket() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const [showTimes, setShowTimes] = useState()
  useEffect(() => {
    movieService.getListTheaterBookTickets(id)
    .then((res) => {
      console.log('res: ', res);
      setShowTimes(res.data.content);
    })
    .catch((err) => { 
      console.log('err: ', err);
    });
  }, [id]);
  let user = useSelector((state) => {
    return state.userSlice.userInfo;
  });
  let userBookTickets = useSelector((state) => {
    return state.userSlice.userBookTickets;
  });
  const handleActiveSeats = (seat) => { 
    dispatch(setUserBookTickets(seat))
  }
  const renderSeats = () => { 
    // return showTimes.danhSachGhe.map((seat, index) => { 
    //   return (
    //     // <Fragment key={index}>
    //     //   {(index + 1) / 16 == 0 ? <br /> : ""}
    //     // </Fragment>
    //     <button className='ghe' key={index}>{seat.stt}</button>
    //   )
    // })
    return showTimes?.danhSachGhe.map((seat, index) => { 
          let classGheVip = seat.loaiGhe === "Vip" ? "gheVip" : "";
          let classGheDaDat = seat.daDat === true ? "gheDaDat" : "";
                // Ghế đang đặt ; lúc chưa có trong mảng mảng thì k add class
          let classGheDangDat = "";
          // kiểm tra trong mảng có ghế chưa nếu có thì add còn k thì '
          let indexGheDaDangDat = userBookTickets.findIndex((gheDangDat) => {
            return gheDangDat.maGhe === seat.maGhe;
          });
          if (indexGheDaDangDat !== -1) {
            classGheDangDat = "gheDangDat";
          } else {
            classGheDangDat = "";
          }
          return(
          <Fragment key={index}> 
              <button onClick={() => { 
                handleActiveSeats(seat)
               }}
               disabled={seat.daDat === true} 
               className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} `}
               key={index}>
                {seat.daDat ? <span className='text-gray-300'>X</span> : <span className='text-gray-50'>{seat.stt}</span> }
              </button>
              {(index + 1) / 16 == 0 ? <br /> : ""}
          </Fragment>
          )
      })
   }
  return (
    <div className='dark-theme py-10 '>
        <div className="container-90">
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <div className="flex items-center justify-center">
                <div className="bg-[#233a50] rounded py-1 text-xl text-white text-center font-[500] w-[80%]">Screen</div>
              </div>
                <div className="w-[90%] mx-auto mt-8 text-center">
                  {renderSeats()}
                </div>
            </div>
            <div className="col-span-4 text-white">
              <p className='text-center font-bold text-3xl mb-3'>Ticket information</p>
              <hr className='border-t-[1px] border-solid border-[grey]'/>
              <div className="my-3 text-[#abb7c4]">
                <p className='text-xl text-white'>{showTimes?.thongTinPhim.tenPhim}</p>
                <p className='mt-1'>{showTimes?.thongTinPhim.ngayChieu}</p>
                <div className="flex items-center justify-between my-1">
                  <p>{showTimes?.thongTinPhim.tenCumRap}</p>
                  <p> {showTimes?.thongTinPhim.tenRap}</p>
                </div>
                <p>{showTimes?.thongTinPhim.diaChi}</p>
              </div>
              <hr className='border-t-[1px] border-solid border-[grey]'/>
              <div className="flex items-center justify-between my-3">
                <p className='grey-light font-[500]'>
                  Selected seat: 
                  <div className="grid grid-cols-8 gap-2 mt-2">
                  {userBookTickets.map((gheDangDat, index) => { 
                  return (
                      <span className="bg-[#dbf836aa] rounded py-1 px-3 col-span-1 text-white font-[400]">
                        {gheDangDat.tenGhe} 
                      </span>
                    )
                  })} 
                  </div>
                </p>
              </div>
              <hr className='border-t-[1px] border-solid border-[grey]'/>
              <div className="text-white my-3">
                <p className='grey-light font-[500]'>E-Mail</p>
                <p>{user.email}</p>
              </div>
              <hr className='border-t-[1px] border-solid border-[grey]'/>
              <div className="text-white my-3">
                <p className='grey-light font-[500]'>Phone</p>
                <p>{user.soDT}</p>
              </div>
              <hr className='border-t-[1px] border-solid border-[grey]'/>
              <div className="text-white my-3 ml-auto">
                <p className='grey-light font-[500]'>Total</p>
                <p className='font-[600] text-xl'>{userBookTickets.reduce((total, seat, index) => { 
                  return total += seat.giaVe
                 },0).toLocaleString()} <span className='text-white'>VNĐ</span> </p>
              </div>
              <div className="mt-10">
              <button class="text-sm rounded uppercase py-2 font-[500] w-full bg-red-700 text-white">Buy ticket</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
