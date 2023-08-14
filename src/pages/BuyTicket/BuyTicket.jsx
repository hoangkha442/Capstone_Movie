import { Button, message } from 'antd';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { movieService } from '../../services/movieService';
import './BuyTicket.css'
import { setUserBookTickets } from '../../redux/userSlice';
export default function BuyTicket() {
  const navigate = useNavigate()
  const {id} = useParams();
  const dispatch = useDispatch();
  const [showTimes, setShowTimes] = useState()
  let userBookTickets = useSelector((state) => {
    return state.userSlice.userBookTickets;
  });
  // getListTheaterBookTickets
  useEffect(() => {
    movieService.getListTheaterBookTickets(id)
    .then((res) => {
      // console.log('res: ', res);
      setShowTimes(res.data.content);
    })
    .catch((err) => { 
      console.log('err: ', err);
    });
  }, [id]);
  let user = useSelector((state) => {
    return state.userSlice.userInfo;
  });
  // Post Thông tin đặt vé
  const handlePostListBookItem = () => {
    movieService
      .postTicketManagement({
        maLichChieu: id,
        danhSachVe: userBookTickets,
      })
      .then((res) => {
        message.success(res.data.content);
      });
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };
  const handleChangePage = () => { 
    return navigate('/login')
   }
  
  const handleActiveSeats = (seat) => { 
    dispatch(setUserBookTickets(seat))
  }
  const renderSeats = () => { 
    return showTimes?.danhSachGhe.map((seat, index) => { 
          let classGheVip = seat.loaiGhe === "Vip" ? "gheVip" : "";
          let classGheDaDat = seat.daDat === true ? "gheDaDat" : "";
                // Ghế đang đặt ; lúc chưa có trong mảng mảng thì k add class
          let classGheDangDat = "";
          // kiểm tra trong mảng có ghế chưa nếu có thì add còn k thì '
          let indexGheDaDangDat = userBookTickets.findIndex((gheDangDat) => {
            return gheDangDat.maGhe === seat.maGhe;
          });
          let classGheDaDuocDat = "";
          if(user.taiKhoan === seat.taiKhoanNguoiDat){
            classGheDaDuocDat = 'gheDaDuocDat'
          }
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
               className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat}`}
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
        {user ? <><div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-8">
              <div className="flex items-center justify-center">
                <div className="bg-[#233a50] rounded py-1 text-xl text-white text-center font-[500] w-[80%]">Screen</div>
              </div>
                <div className="w-[90%] mx-auto mt-8 text-center">
                  {renderSeats()}
                </div>
                <div className="text-white flex flex-wrap items-center justify-start md:justify-center space-x-0 md:space-x-14 mt-5 mb-3">
                  <div className="flex items-center">
                    <button className='ghe'></button>
                    <p>Regular</p>
                  </div>
                  <div className="flex items-center">
                    <button className='ghe gheVip'></button>
                    <p>VIP</p>
                  </div>
                  <div className="flex items-center">
                    <button className='ghe gheDangDat' ></button>
                    <p>Selected seat</p>
                  </div>
                </div>
                <div className="text-white flex flex-wrap items-center justify-start md:justify-center md:space-x-5">
                  <div className="flex items-center">
                    <button className='ghe gheDaDat'>X</button>
                    <p>Seats are booked</p>
                  </div>
                  <div className="flex items-center">
                    <button className='ghe gheDaDat gheDaDuocDat'>X</button>
                    <p>You have booked</p>
                  </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-4 md:mt-0 mt-5 text-white">
              <p className='text-center font-bold text-3xl mb-3'>Ticket information</p>
              <hr className='border-t-[1px] border-solid border-[grey]'/>
              <div className="my-3 text-[#abb7c4]">
                <p className='text-xl font-[600] text-white'>{showTimes?.thongTinPhim.tenPhim}</p>
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
                  Selected seat
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
              <button  onClick={handlePostListBookItem} class="text-sm rounded uppercase py-2 font-[500] w-full bg-red-700 text-white">Buy ticket</button>
              </div>
            </div>
          </div></> : <>{handleChangePage()}</>}
          
        </div>
    </div>
  )
}
