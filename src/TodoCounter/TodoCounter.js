import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoCounter.css';
import '../TodoSearch/TodoSearch'
import fondoEstrellado from '../static/fondo.jpg'

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <>
    <div className='encabezado'>
    <img src={fondoEstrellado} alt="Descripción de la imagen"/>
    </div>
    
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
    </>
  );
}

export { TodoCounter };