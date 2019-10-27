import React from 'react';

import './App.css';
import UserForm from './Components/UserForm';
import ButtonAppBar from './Components/appbar'
import {StateManager} from './store/StateManagment'
function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
        <div className="container">
          <StateManager>
            <UserForm/>
          </StateManager>
          
        </div>
    </div>
  );
}

export default App;
