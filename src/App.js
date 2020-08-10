import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import TestContainer from './components/TestContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import TodoList from './components/TodoList';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
        <UserContainer />
        {/* <ItemContainer />
        <ItemContainer />
        <CakeContainer />
        <IceCreamContainer />
        <HooksCakeContainer />
         <NewCakeContainer /> */}
      </div>
    </Provider>

  );
}

export default App;
