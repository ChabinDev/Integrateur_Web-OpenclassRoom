import React, { useState } from 'react'

const FramworkList = () => {

    let [frameworks, setFrameworks] = useState([
        {
            id: 1,
            name: 'React',
        },
        {
            id: 2,
            name: 'Vue',
        },
        {
            id: 3,
            name: 'Angular',
        }
    ]);

    let [frameworkName, setFrameWorkName] = useState('');

    const addFramework = (e) => {
        e.preventDefault();
        setFrameworks([...frameworks, {id: Date.now(), name:frameworkName}])
        setFrameWorkName('')
    }

  return (
      <div>
          <form onSubmit={addFramework}>
              <input type='text' value={frameworkName} onChange={e => setFrameWorkName
              (e.target.value)} />
              <button type='submit'>add</button>
          </form>
          <hr />
          {
          (frameworks.length === 0) ? (
          <h2>No Framworks</h2>
          ) : (
          <ul>
              {
                  frameworks.map(fwk => <li key={fwk.id}>{fwk.name}</li>)
              }
          </ul>
            )}
     </div>
  )
}

export default FramworkList;