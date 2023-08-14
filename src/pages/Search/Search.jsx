import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Search() {
  const [searchItem, setSearchItem] = useState('')
  const navigate = useNavigate();
  const handleSearch = (event) => { 
    event.preventDefault();
    navigate(`/searchItem?q=${searchItem}`)
  }
  const handleOnchange = (event) => { 
    let {value} = event.target
    setSearchItem(value)  
  }
  return (
    <form
      onSubmit={handleSearch}
      className="border-[#020d18] relative"
      id="searchmovie"
    >
      {/* <select name="topsortby" className="selection pl-[15px] w-[10%] text-white border-r-[1px] h-12 border-solid border-[#020d18] bg-[#233a50] uppercase">
        <option value="ht_movie">Movie</option>
        <option value="cast">Cast</option>
        <option value="news">News</option>
      </select> */}
      <input
        onChange={handleOnchange}
        required
        className="px-[15px] border-none w-full bg-[#233a50] h-12  grey-light font-light overflow-hidden"
        type="text"
        placeholder="Search for Movie"
      />
      <button className="search-form"></button>
    </form>
  );
}
