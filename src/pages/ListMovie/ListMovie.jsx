import React, { useEffect, useState } from "react";
import { movieService } from '../../services/movieService'
import CardItem from "./CardItem";
import { Pagination, Menu } from "antd";

export default function ListMovie() {
  const [listMovie, setListMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    movieService.getListMovie(currentPage).then((res) => {
      setListMovie(res.data.content);
    });
  }, [currentPage]);
  const items = [
    {
      label: '#All',
      key: 'all',
    },
    {
      label: '#action',
      key: 'action',
    },
    {
      label: '#action-adventure',
      key: 'action-adventure',
    },
    {
      label: '#adventure',
      key: 'adventure',
    },
    {
      label: '#animation',
      key: 'animation',
    },
    {
      label: '#history',
      key: 'history',
    }
  ];
  const [current, setCurrent] = useState('all');
  const onClick = (e) => {
    setCurrent(e.key);
  };
 

  const onChange = (page) => {
    setCurrentPage(page);
  };
  const handlerRenderListCard = () => {
    return listMovie?.items.map((item, index) => {
      return <CardItem key={index} item={item} />;
    });
  };
  return (
    <div className="dark-theme">
      <div className="container-80 container mx-auto py-6 ">
        <div className="uppercase text-[26px] text-white font-[500]">IN GENERES</div>
        <Menu className='dark-theme grey-light w-[70%] font-[500] text-[14px] uppercase my-8' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        <div className="flex-col justify-between flex-wrap">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-3 lg:gap-4 gap-4 py-3">
            {handlerRenderListCard()}
          </div>
          <div className="flex justify-center mt-6">
            <Pagination
              onChange={onChange}
              current={currentPage}
              total={listMovie?.totalCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
