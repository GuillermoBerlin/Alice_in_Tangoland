import './App.css';
import Header from './Header';
import Buttons from './Buttons';

function App() {
  return (
    <div className="mainDiv">
      <div className="cuadradoArriba">
        <Header/>
      </div>
      <div className="cuadradoAbajo">
        <Buttons/>
      </div>
    </div>
  );
}

export default App;
