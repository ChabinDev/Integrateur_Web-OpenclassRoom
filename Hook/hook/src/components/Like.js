import React, { useEffect, useState } from 'react'

const Like = () => {

    const [nbIfLikes, setNbIfLikes] = useState(0);

    useEffect(() => {

    }, [])
    
    return (
            <div>
                {nbIfLikes}
                <button onClick={() => setNbIfLikes(nbIfLikes + 1)}>Like</button>
            </div >
  )
}

export default Like