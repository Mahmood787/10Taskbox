import React from 'react';
import {Provider} from 'react-redux'
import {store} from './lib/redux'
import './App.css';
import InboxScreen from './stories/inboxScreen';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <InboxScreen/>
      </Provider>
    </div>
  );
}

export default App;
