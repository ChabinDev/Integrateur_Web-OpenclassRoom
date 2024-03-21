import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PostList = () => {

    const [posts, setPosts] = useState([]);
    const [counter, setCounter] = useState(0);
    const [counterDisabled, setCounterdisabled] = useState(false);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => setPosts(res.data));
    }, []);

    useEffect(() => {
        if (counter === 3) {
            setCounterdisabled(true);
        }
    }, [counter]);

    const resetCounter = () => {
        setCounter(0);
        setCounterdisabled(false);
    }

    return (
        <>
            <button onClick={(e) => setCounter(counter + 1)} disabled={counterDisabled}>{counter}</button>
            <button onClick={resetCounter}>Reset</button>
            
            <hr/>
        <h2>PostList</h2>
        {
                posts.length > 0 ? (posts.map(p => <div key={p.id}>{p.title}</div>)) : (
            <h3>loading ....</h3>
            )
        } 
      </>
  )
}

export default PostList