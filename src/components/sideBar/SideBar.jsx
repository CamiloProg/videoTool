import React from "react";
import "./sideBar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
export default function SideBar() {
  const navigate = useNavigate(); // Función para la navegación
  const location = useLocation(); // Ubicación actual

  // Función para manejar el clic en el icono de flecha atrás
  const handleGoBack = () => {
    navigate("/"); // Navegar a la ruta raíz
  };
  return (
    <div className='sideBar'>
      {location.pathname === "/videos" && ( // Mostrar el botón solo en la ruta /videos
        <button className='backButton' onClick={handleGoBack}>
          <i className='fas fa-arrow-left fa-xl'></i>
        </button>
      )}
      <div className='logo'>
        <i className='fa-regular fa-circle-play fa-2xl'></i>
      </div>
      <section>
        <ul>
          <a href=''>
            <li>
              <i class='fa-solid fa-table-cells-large fa-lg'></i>
              Dashboard
            </li>
          </a>
          <a href=''>
            <li className='selectedSideBar'>
              <i class='fa-regular fa-folder fa-lg'></i>
              Videos
            </li>
          </a>
          <a href=''>
            <li>
              <i class='fa-regular fa-circle-play fa-lg'></i>
              Player
            </li>
          </a>
          <a href=''>
            <li>
              <i class='fa-solid fa-chart-simple fa-lg'></i>
              Analytics
            </li>
          </a>
          <a href=''>
            <li>
              <i class='fa-solid fa-gear fa-lg'></i>
              Configuraciones
            </li>
          </a>
        </ul>
      </section>
      <div className='storage'>
        <h5>Mi Plan - Plus</h5>
        <p>El uso se renueva el: 3-may-23</p>
        <div className='containerStorage'>
          <div className='storageText'>
            <p>Almacenamiento</p>
            <h6>25.3GB/1 TB</h6>
          </div>
          <div className='storage-bar'>
            <div className='fill'></div>
          </div>
        </div>
        <div>
          <div className='storageText'>
            <p>Banda Mensual</p>
            <h6>25.3GB/1 TB</h6>
          </div>
          <div className='storage-bar'>
            <div className='fill'></div>
          </div>
        </div>
        <button className='buttonStorage'>Administrar Plan</button>
      </div>
    </div>
  );
}
