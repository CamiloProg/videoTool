import React from "react";
import "./videosInfo.css";
import Table from "./Table";
export default function VideosInfo() {
  return (
    <div className='videosHome'>
      <div className='navBarVideos'>
        <div className='options'>
          <div className='options selected'>
            <i class='fa-solid fa-book'></i>
            <p>Biblioteca</p>
          </div>
          <div className='options '>
            <i class='fa-solid fa-book'></i>
            <p>Papelera</p>
          </div>
        </div>
      </div>

      <div className='searchBar'>
        <i class='fa-solid fa-magnifying-glass searchIcon'></i>
        <input type='text' placeholder='Buscar...' className='search-input' />
      </div>

      <Table />
    </div>
  );
}
