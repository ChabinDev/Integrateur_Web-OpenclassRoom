import React from "react";
//import PostList from './components/PostList'
//import Calculette from './components/Calculette'
import LevelA from "./components/LevelA";
import MailContextProvider from "./contexts/MailContext";
//import Like from './components/Like'
//import FramworkList from './components/FramworkList'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Like /> */}
        {/* <FramworkList /> */}
        {/* <PostList /> */}
        {/* <Calculette /> */}
        <MailContextProvider>
          <LevelA />
        </MailContextProvider>
      </header>
    </div>
  );
};

export default App;
