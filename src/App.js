import imageHogwarts from './img/Hogwartscrest.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState (null);
  const reqApi = async () =>{
    
    const api = await fetch ('http://hp-api.herokuapp.com/api/characters')
    const characterApi = await api.json();
    
    setCharacters(characterApi)
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Hogwarts</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
          <img src= {imageHogwarts} alt="Hogwarts" className="img-home"></img>
          <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
          </>
        )}
        
      </header>
    </div>
  );
}

export default App;
