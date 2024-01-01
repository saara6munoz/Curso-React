import React from 'react';
import './TodoSearch.css';
import fondoEstrellado from '../static/fondo.jpg'

function TodoSearch({
  searchValue,
  setSearchValue,
}) {
  return (
    <>
    <div className='encabezado'>
      <img src={fondoEstrellado} alt="Descripción de la imagen"/>
    </div>
    <input
      placeholder="Buscar..."
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
    </>
  );
}

export { TodoSearch };