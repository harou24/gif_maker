import React from 'react'
import { Grommet, grommet} from "grommet";
import Home from '../pages'
import { Provider } from 'react-redux';
import store from '../store/store';

function App() {
  return (
    <Grommet className="App" theme={grommet}>
      <Provider store={store}>
        <Home />
      </Provider>
    </Grommet>
  );
}


export default App
