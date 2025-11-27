import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './pages/User'

import { Routes, Route } from "react-router-dom";
 import Home from "./pages/Home";
 import About from "./pages/About";
 import Profile from './pages/Profile';
 import Welcome from './pages/Welcome';
import FruitList from './pages/FruitList'
import TodoList from './pages/TodoList'
import TaskList from './pages/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/user/:id" element={<User />} />
       <Route path="/profile/:username" element={<Profile />} />
       <Route path="/welcome" element={<Welcome isLoggedIn = {true} />} />
       <Route path="/fruits" element={<FruitList />} />
       <Route path="/todos" element={<TodoList/>} />
       <Route path="/task" element={<TaskList/>} />
       
     </Routes>
  );
}

export default App
