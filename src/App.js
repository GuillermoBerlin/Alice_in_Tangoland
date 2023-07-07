import './App.css';
import Header from './Header';
import ButtonsAndContent from './ButtonsAndContent';

function App() {
  return (
    <div className="mainDiv">
      <div className="cuadradoArriba">
        <Header/>
      </div>
      <div className="cuadradoAbajo">
        <ButtonsAndContent/>
      </div>
    </div>
  );
}

export default App;


