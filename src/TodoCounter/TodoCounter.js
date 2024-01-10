import './TodoCounter.css';
import '../TodoSearch/TodoSearch'
import fondoEstrellado from '../static/fondo.jpg'

function TodoCounter({ total, completed }) {
  return (
    <>
    <div className='encabezado'>
      <img src={fondoEstrellado} alt="Descripción de la imagen"/>
    </div>
    
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
    </>
  );
}

export { TodoCounter };