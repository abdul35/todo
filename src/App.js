
import { useState } from "react";
import TodoList from './components/TodoList'
import { styled } from "styled-components"
import TodoAddInput from "./components/TodoAddInput";


const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Button = styled.button`
  padding: 5px 9px;
  font-size: 1rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background-color: lightgreen;
`

function App() {
  const [todos, setTodo] = useState([
    { id: 1, title: "Some text", completed: false },
    { id: 2, title: "Lorem ipsum dolor sit.", completed: true },
    { id: 3, title: "Lorem ipsum dolor 1.", completed: false },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur.",
      completed: true,
    },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addHandler = () => {
    if (newTodo && newTodo.trim()) { 
      setTodo([...todos, {id: Date.now(), title: newTodo, completed:false}])
    }
    setNewTodo('')
  }


  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h1>Todo List App</h1>
        </Container>
        <Container>
          <TodoAddInput newTodo={newTodo} setNewTodo={setNewTodo} />
          <Button onClick={() => addHandler()}>Add</Button>
        </Container>
      </header>
      <main className="main">
        <Container>

        <div className="todo">
          <TodoList todos={todos} setTodo={setTodo} />
        </div>
        </Container>
      </main>
    </div>
  );
}

export default App;
