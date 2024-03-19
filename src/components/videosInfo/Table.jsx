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
      nombre: "Entrenamiento.mp4",
      tamaño: "100MB",
      duracion: "1:30:00",
      ultimaModificacion: "2024-03-19",
    },
    {
      nombre: "Crea-un-ticket.mp4",
      tamaño: "150MB",
      duracion: "2:05:00",
      ultimaModificacion: "2024-03-18",
    },
    {
      nombre: "Salida-version-nueva.mp4",
      tamaño: "80MB",
      duracion: "0:45:00",
      ultimaModificacion: "2024-03-17",
    },
    {
      nombre: "Salida-al-mercado.mp4",
      tamaño: "200MB",
      duracion: "3:20:00",
      ultimaModificacion: "2024-03-16",
    },
    {
      nombre: "Como-cerrrar-ventana.mp4",
      tamaño: "120MB",
      duracion: "2:10:00",
      ultimaModificacion: "2024-03-15",
    },
  ];

  // Manejar la selección de fila
  const handleRowSelect = (index) => {
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
            <th className='name'>
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
            <th>Tamaño</th>
            <th>Duración</th>
            <th>Última Modificación</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} onClick={handleNavigateToVideos}>
              <td className='name'>
                <label className='container'>
                  <input
                    type='checkbox'
                    checked={selectedRows.includes(index)}
                    onChange={() => handleRowSelect(index)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <span className='checkmark'></span>
                </label>
                <div className='folderIcon'>
                  <i className='fa-regular fa-circle-play '></i>
                </div>
                {item.nombre}
              </td>
              <td className='tamaño'>{item.tamaño}</td>
              <td className='duracion'>{item.duracion}</td>
              <td className='ultimaModificacion'>{item.ultimaModificacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Tabla;
