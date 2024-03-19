import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TodoDetails = () => {

    const { id } = useParams();

    // const [getTodos, setGetTodos] = useState([]);

    // const Data = () => {
    //     axios.get('https://jsonplaceholder.typicode.com/todos')
    //         .then((res) => setGetTodos(res.data));
    // }
    //   useEffect(() => {
    //       Data();
    //   }, []);
    // console.log(getTodos.map(todo => (
    //     {id}
    // )))

  return (
      <div>
          Détails de {id}
      </div>
  )
}

export default TodoDetails;