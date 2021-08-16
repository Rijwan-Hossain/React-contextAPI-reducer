import MovieList from "./Movies/MovieList";
import Nav from "./Nav";
import { MovieProvider } from './Movies/MovieContext'
import CreateNewMovie from "./Movies/CreateNewMovie";

function App() { 
  return ( 
    <div className="App"> 
      <MovieProvider> 
        <Nav /> 
        <CreateNewMovie /> 
        <MovieList /> 
      </MovieProvider> 
    </div> 
  ); 
} 

export default App; 