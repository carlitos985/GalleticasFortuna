import React from 'react'

const RandomPhrase = ({quote}) => {

  //console.log(quote);
  //Desestructuro el objeto
  const{author, phrase}=quote;
  return (

    
    <div className='phraseAuthor'>
     <p>{phrase}</p> 
     <p>Fuente: {author}</p> 
    </div>
    
  ) 
}

export default RandomPhrase