import React from "react";
import "./videosHome.css";
import Table from "./Table";
export default function VideosHome() {
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
        <div className='options'>
          <button className='options buttonVideos'>
            <i class='fa-regular fa-folder'></i>
            <p>Nueva carpeta</p>
          </button>
          <button className='options buttonVideosBlue'>
            <i className='fa-regular fa-circle-play '></i>
            <p>Nuevo video</p>
          </button>
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
