/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Store} from './src/Store'
import { Provider } from 'react-redux';
import { TodoApp } from './src/components/TodoApp';

function App() {
  return (
      <Provider store={Store}>
        <TodoApp />
      </Provider>
  );
}

export default App;
