import { useState } from 'react'
import './App.css';

import styled from '@emotion/styled'
import Switch from '@material-ui/core/Switch'

const FixedSwitch = styled(Switch)`
  &&& .MuiIconButton-root {
        position: absolute;
    }
`

function App() {
  const [state, setState] = useState({
    fixedSwitch: true,
    brokenSwitch: true,
})

const handleChange = (event) => {
    setState({
        ...state,
        [event.target.name]: event.target.checked,
    })
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Material UI's Switch</h1>
        
        <h2>Broken switch</h2>
        <Switch checked={state.brokenSwitch} onChange={handleChange} name="brokenSwitch" />

        <h2>Fixed switch</h2>
        <FixedSwitch checked={state.fixedSwitch} onChange={handleChange} name="fixedSwitch" />
      </header>
    </div>
  );
}

export default App;
