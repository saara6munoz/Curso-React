import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoList } from './TodoList/TodoList';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodosLoading } from './TodoLoading/TodoLoading';
import { TodosError } from './TodoError/TodoError';
import { EmptyTodos } from './TodoEmpty/TodoEmpty';
//import { NotYetIcon } from '../icons/NotYetIcon';

function AppUI({
    loading,
    error,
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
          {loading && (
            <>
              <TodosLoading/>
              <TodosLoading/>
              <TodosLoading/>
            </> 
          )}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
        </TodoList>
        
        <CreateTodoButton />
      </>
    );
  }
  
  export { AppUI };