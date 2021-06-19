
import './App.css';
import  Character from './Character';
import Footer  from './Footer';
import Link from './Link';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          A murder!
        </p>
        <Character name="Marsha"/>
        <p></p>
        <Link href='https://www.antshaw.com'>Hi there!</Link>
      <Footer />
      </header>
    </div>
  );
}

export default App;
