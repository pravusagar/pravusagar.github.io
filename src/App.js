import './app.css';
import Header from "./components/Header";
import Data from './Database';

function App() {
  return (
    <>
      <Header Data={Data}/>
    </>
  );
}

export default App;
