import './TodoCounter.css';
import '../TodoSearch/TodoSearch'

function TodoCounter({ total, completed }) {
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };