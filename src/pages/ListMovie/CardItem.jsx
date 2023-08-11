import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card } from "antd";
import "./ListMovie.css";
const { Meta } = Card;
export default function CardItem(props) {
  const { hinhAnh, tenPhim, moTa, maPhim } = props.item;
  return (
    <Card
      className="bg-[#233a50] border-none"
      hoverable
      style={{
        width: 220,
      }}
      cover={[
        <NavLink to={`/detail/${maPhim}`}>
          <figure className="movie-item hover:before:left-[125%] relative overflow-hidden cursor-pointer">
            <img
              className="h-[300px] w-full object-center rounded"
              src={hinhAnh}
              alt={tenPhim}
            />
            <figcaption className="overlay absolute left-0 bottom-0 w-full h-[100%] opacity-0 bg-overlay hover:opacity-100 transition-all">
              <div className="figcaption-btn w-[80%] h-[30%]">
                <Button className="text-white border-none rounded-3xl bg-red-700 font-[500] hover:text-white uppercase flex items-center">
                  <span>Read more</span>{" "}
                  <i class="fa fa-angle-right ml-1 text-[10px] mt-[2px] font-bold"></i>
                </Button>
              </div>
            </figcaption>
          </figure>
        </NavLink>,
      ]}
    >
      <Meta
        className="text-white"
        title={
          tenPhim.length >= 26 ? tenPhim.substring(0, 26) + "..." : tenPhim
        }
        description={moTa.length >= 40 ? moTa.substring(0, 40) + "..." : moTa}
      />
    </Card>
  );
}
