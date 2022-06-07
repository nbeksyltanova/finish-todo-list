// import React from "react";

// import "./App.css";
// // let numbers = [1, 2, 3];

// function App() {
//   const [numbers, setNumbers] = React.useState([1, 2, 3]);

//   const addNumber = () => {
//     // numbers.push(1);
//     const randNumber = Math.round(Math.random() * 10);
//     const newArr = [...numbers, randNumber];
//     console.log(newArr);
//     setNumbers([newArr]);
//   };
//   return (
//     <div className="App">
//       <ul>
//         {numbers.map((num, index) => (
//           <li key={index}>{num}</li>
//         ))}
//       </ul>
//       <button>Новое число</button>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import ToDo from "./Todo";
import ToDoForm from "./Todoform";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="App">
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
}

export default App;
