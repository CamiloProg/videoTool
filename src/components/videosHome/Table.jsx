import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Table.css";

const Tabla = () => {
  const navigate = useNavigate(); // Función navigate de React Router DOM
  const [selectedRows, setSelectedRows] = useState([]); // Estado para almacenar las filas seleccionadas
  const [selectAll, setSelectAll] = useState(false); // Estado para seleccionar todas las filas

  // Datos ficticios
  const data = [
    {
      nombre: "Afiliado Master",
      videos: 10,
      tamaño: "100MB",
      fecha: "2024-03-19",
    },
    { nombre: "BeMaster", videos: 15, tamaño: "150MB", fecha: "2024-03-18" },
    { nombre: "Comizzion", videos: 8, tamaño: "80MB", fecha: "2024-03-17" },
    {
      nombre: "Exportados Wil",
      videos: 20,
      tamaño: "200MB",
      fecha: "2024-03-16",
    },
    {
      nombre: "Creador de Contenido",
      videos: 12,
      tamaño: "120MB",
      fecha: "2024-03-15",
    },
  ];

  // Manejar la selección de fila
  const handleRowSelect = (index, event) => {
    event.stopPropagation(); // Detener la propagación del evento para evitar la navegación directa a "/videos"
    const selectedIndex = selectedRows.indexOf(index);
    let newSelected = [...selectedRows];

    if (selectedIndex === -1) {
      newSelected.push(index);
    } else {
      newSelected.splice(selectedIndex, 1);
    }

    setSelectedRows(newSelected);
    setSelectAll(newSelected.length === data.length); // Verificar si se han seleccionado todas las filas
  };

  // Manejar la selección de todas las filas
  // Manejar la selección de todas las filas
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
      setSelectAll(false);
    } else {
      setSelectedRows([...Array(data.length).keys()]);
      setSelectAll(true);
    }
  };

  // Manejar la navegación a la ruta /videos
  const handleNavigateToVideos = () => {
    navigate("/videos");
  };
  return (
    <div className='tabla-container'>
      <table>
        <thead>
          <tr>
            <th className='name' onClick={handleSelectAll}>
              <label className='container' onClick={(e) => e.stopPropagation()}>
                <input
                  type='checkbox'
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
                <span className='checkmark'></span>
              </label>
              <span>Nombre</span>
            </th>
            <th>Videos</th>
            <th>Tamaño</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} onClick={handleNavigateToVideos}>
              <td className='name'>
                <label
                  className='container'
                  onChange={(e) => handleRowSelect(index, e)} // Pasa el evento aquí
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    type='checkbox'
                    checked={selectedRows.includes(index)}
                    // Detener la propagación del evento
                  />

                  <span className='checkmark'></span>
                </label>
                <div className='folderIcon'>
                  <i class='fa-regular fa-folder'></i>
                </div>

                {item.nombre}
              </td>
              <td className='videos'>{item.videos}</td>
              <td className='tamaño'>{item.tamaño}</td>
              <td className='fecha'>{item.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
