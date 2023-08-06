import React from "react";
export default function Search() {
  return (
    <form
      className="border-[#020d18] relative"
      id="searchmovie"
    >
      <select name="topsortby" className="selection pl-[15px] w-[10%] text-white border-r-[1px] h-12 border-solid border-[#020d18] bg-[#233a50] uppercase">
        <option value="ht_movie">Movie</option>
        <option value="cast">Cast</option>
        <option value="news">News</option>
      </select>
      <input
        required
        className="px-[15px] border-none w-[90%] bg-[#233a50] h-12  grey-light font-light overflow-hidden"
        type="text"
        placeholder="Search for Movie"
        autoComplete="off"
      />
      <button className="search-form"></button>
    </form>
  );
}
