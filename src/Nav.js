import React, {useContext} from 'react'
import { MovieContext } from './Movies/MovieContext'

function Nav() { 
   const [movies] = useContext(MovieContext); 
   return (
      <div style={{
         background: '#ededed', 
         height: '80px', 
         display: 'flex', 
         justifyContent: 'space-around'
      }}>
         <h2>Rijwan Hossain</h2> 
         <h2>Total Movies: {movies.length} </h2> 
      </div>
   )
}

export default Nav; 