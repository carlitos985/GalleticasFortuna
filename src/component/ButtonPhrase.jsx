import React from "react";
import phrases from "../utils/phrases.json"; //Iportar el archivo de phrases.lson
import randomIndex from "../services/randomIndex";
import bgArray from '../utils/bgArray.json' //Importo archivo bgArray.json que contiene array de posiciones de las imagenes


//Recibo los props de App.jsx 
const ButtonPhrase = ({ setQuote, setBgApp }) => {
// Creo una funcion para el botón
    const handleButton = () => {
    //Recibo el setQuote como parametro de la prop del boton archivo app.jsx
    const sentence = randomIndex(phrases);

    //Variablepara el cambio de fondo con el botón
    const bgIndex = randomIndex(bgArray)

    //Setter para el button
    //Setter cambio de frase
    setQuote(sentence);
    //Setter cambio de fondo
    setBgApp(bgIndex);
 
    
  };
  return <button onClick={handleButton}>Probar mi suerte</button>;
};
export default ButtonPhrase;
