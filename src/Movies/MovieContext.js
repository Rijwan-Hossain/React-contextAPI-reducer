import React, { createContext, useReducer} from 'react'
import { movieReducer } from './MovieReducer'

const MovieContext = createContext();

function MovieProvider(props) {
   const [state, dispatch] = useReducer(movieReducer, [ 
      { name: 'X-Man', price: 123, id: 56747764 }, 
      { name: 'Avenger', price: 34557, id: 7987854 }, 
      { name: 'Captain America', price: 23, id: 65758545 } 
   ]); 

   return ( 
      <div> 
         <MovieContext.Provider value={[state, dispatch]}> 
            { props?.children } 
         </MovieContext.Provider> 
      </div> 
   ) 
} 

export { 
   MovieContext, 
   MovieProvider 
} 