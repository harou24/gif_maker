import React from 'react'
import { Grommet, grommet} from "grommet";
import Home from '../pages'

function App() {
  return (
    <Grommet className="App" theme={grommet}>
      <Home />
    </Grommet>
  );
}


export default App
