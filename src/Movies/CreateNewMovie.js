import React, {useState, useContext} from 'react'
import { MovieContext } from './MovieContext';

function CreateNewMovie() { 
   const [state, dispatch] = useContext(MovieContext); 

   const [name, setName] = useState(''); 
   const [price, setPrice] = useState(''); 

   return ( 
      <div style={{margin: '10px 200px'}}> 
         <input value={name} onChange={(e) => setName(e.target.value)} /> 
         <input value={price} onChange={(e) => setPrice(e.target.value)} /> 
         <br /> 
         <button onClick={() => { 
            dispatch({ 
               type: 'ADD', 
               payload: { name, price, id: Math.floor(Math.random() * 100000) } 
            }) 
            setName(''); 
            setPrice('');
         }}> 
            Save 
         </button> 
      </div> 
   ) 
} 

export default CreateNewMovie; 