import React from 'react'
import PostList from './components/PostList'
//import Like from './components/Like'
//import FramworkList from './components/FramworkList'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <Like /> */}
        {/* <FramworkList /> */}
        <PostList />
      </header>
    </div>
  )
}

export default App