import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'

function MovieList() { 
   const [movies, dispatch] = useContext(MovieContext); 
   
   return ( 
      <div style={{margin: '10px 200px'}}> 
         <h2>All Movies</h2> 
         <div> 
         { 
            movies.map(movie => { 
               return ( 
                  <div style={{ 
                     display: 'flex', 
                     alignItems: 'center', 
                     justifyContent: 'space-between' 
                  }} 
                  key={movie?.id}> 
                     <div style={{ display: 'flex', alignItems: 'center' }}> 
                        <p style={{margin: '0px', minWidth: '200px'}}> 
                           <strong>Name: </strong> {movie?.name} 
                        </p> 
                        <p style={{margin: '5px'}}>
                           <strong>Price: </strong> {movie?.price} 
                        </p> 
                     </div> 

                     <button 
                        style={{color: 'tomato', cursor: 'pointer'}} 
                        onClick={() => dispatch({ type: 'DELETE', payload: movie?.id }) }> 
                        <strong> X </strong> 
                     </button> 
                  </div> 
               ) 
            }) 
         } 
         </div> 
      </div>  
   ) 
} 

export default MovieList; 