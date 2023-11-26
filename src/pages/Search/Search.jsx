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
