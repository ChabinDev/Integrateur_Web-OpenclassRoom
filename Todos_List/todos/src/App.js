import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Todos from './components/Todos'

const App = () => {

  const [getTodos, setGetTodos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => setGetTodos(res.data));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
       Le Routage
      </header>
      <Todos />
    </div>
  );
}

export default App;
