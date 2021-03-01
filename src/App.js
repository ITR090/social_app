import React from 'react';
import Header from "./Components/header";
import Posts  from "./Components/posts";
import {BrowserRouter,Switch} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Switch> */}
           <Header/>
           <Posts/>
        {/* </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
