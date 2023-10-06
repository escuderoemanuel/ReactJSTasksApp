import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import ListaTareas from './components/ListaTareas/ListaTareas';

function App() {
  return (
    <div className='main'>
      <Header />
      <div className='tareasAppContainer'>
        <div className='listaPrincipal'>
          <ListaTareas />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
