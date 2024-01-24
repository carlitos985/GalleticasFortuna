
import './App.css';
import RandomPhrase from './component/RandomPhrase';
import phrases from './utils/phrases.json';
import randomIndex from './services/randomIndex';
import { useState } from 'react';
import ButtonPhrase from './component/ButtonPhrase';


//Importo el Arreglo bgArray.json para modificar la posicion del array de imagen de fondo
import bgArray from './utils/bgArray.json';
function App() {
  
  //console.log(phrases);
  const sentence=randomIndex(phrases);
  //console.log(sentence)

  //Funcion para cambiar la posicion  del array de uimagen de fondo bgArray
  const bgIndex= randomIndex(bgArray);
  const [quote, setQuote]=useState(sentence);

  //Actualizo el array que india el fondo de pantalla
  const[bgApp,setBgApp]=useState(bgIndex);

  //creo objeto de estilos para el fondo
  const bgStyle={
    backgroundImage: `url('../assets/fondo${bgApp}.png')`,
  }
  return (
    <div className="app" style={bgStyle}>
      <div className="container">
        <h1>Galletas de la fortuna</h1>
        <ButtonPhrase 
        //Enviamos por props la informacion a ButtonPhrase para cambio de frase
        setQuote={setQuote}
        //Enviamos por props la informacion a ButtonPhrase para cambio de fondo
        setBgApp={setBgApp}
        />
        <RandomPhrase quote={quote} />
      </div>
    </div>
  );
}

export default App
