import logo from './logo.svg';
import './App.css';
import Slides from './Components/Slides';
import { data } from './Components/Utils/helper';

function App() {
  return (
    <div className="App">
      <Slides data={data}/>
    </div>
  );
}

export default App;
