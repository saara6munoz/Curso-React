import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoSearch } from '../TodoSearch/TodoSearch';


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
]; 

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed   
  ).length;
  const totalTodos = todos.length

  const searchedTodos = todos.filter( // filter -- para filtrar
    (todo) => { //arrow function
      todo.text.includes(searchValue) //include -- que incluya
    }
  )

  console.log('Los usuarios buscan TODOS de '+searchValue);
  return (
    <>
      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos} />

      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;