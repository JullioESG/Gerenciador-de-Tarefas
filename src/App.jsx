import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./App.css";
import {useEffect, useState } from "react";
import{v4} from "uuid";
/*import Classe0 from "./components/Classe0";*/


function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks])

/*
// SE QUISER PODE CHAMAR UMA API  
useEffect(() => {
  const fetchTasks = async () => {
    // CHAMAR A API
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10",
      {
        method: "GET",
      }
    );

    // PEGAR OS DADOS QUE ELA RETORNA
    const data = await response.json();

    //ARMAZENAR/PERSISTIR ESSAS DADOS NO STATE
    setTasks(data);

  };
  fetchTasks();
}, []);
*/

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted};
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter(task => task.id != taskId)
    setTasks(newTask);
  }

  function onAddTaskSubmit (title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask])
  }
// <Classe0 /> caso queira importar o componente classe
  return (
    <div className="Tarefas">
      <div className="Escopo">
        <h1 className="logo">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} 
        onTaskClick={onTaskClick} 
        onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default App
