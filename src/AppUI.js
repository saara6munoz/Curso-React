import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoList } from './TodoList/TodoList';
import { TodoItem } from './TodoItem/TodoItem';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';
import { TodoSearch } from './TodoSearch/TodoSearch';
//import { NotYetIcon } from '../icons/NotYetIcon';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
  }) {
    return (
      <>
        <TodoCounter
          completed={completedTodos}
          total={totalTodos} 
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
  
        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        
        <CreateTodoButton />
      </>
    );
  }
  
  export { AppUI };