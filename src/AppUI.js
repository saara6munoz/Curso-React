import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoList } from './TodoList/TodoList';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodosLoading } from './TodoLoading/TodoLoading';
import { TodosError } from './TodoError/TodoError';
import { EmptyTodos } from './TodoEmpty/TodoEmpty';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoContext } from './TodoContext/TodoContext';
//import { NotYetIcon } from '../icons/NotYetIcon';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
  } = React.useContext(TodoContext);

    return (
      <>
        <TodoCounter/>

        <TodoSearch/>

        <TodoList>
        {loading && (
          <>
            <TodosLoading />
          </>
        )}
        {error && <TodosError/>}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

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