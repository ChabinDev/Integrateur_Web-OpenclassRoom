import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Todos from './components/Todos'
import Contact from './components/Contact'
import About from './components/About'
import TodoDetails from './components/TodoDetails'

const App = () => {

  const [getTodos, setGetTodos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => setGetTodos(res.data));
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          Le Routage
          <Link to={'/todos'}>A Faire</Link>
          <Link to={'/contact'}>Contact</Link>
          <Link to={'about'}>A Propos</Link>
        </header>
        <Routes>
          <Route path='/todos' element={<Todos todos={getTodos} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/todos/:id' element={<TodoDetails />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
