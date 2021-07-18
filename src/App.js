import Routes from './routes'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`

function App() {
  return (
    <>
    <GlobalStyle />
    <Routes />

    </>
  );
}

export default App;
