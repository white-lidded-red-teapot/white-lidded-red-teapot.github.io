import { useState } from 'react';
import './App.css'
import MovieDetails from './components/MovieDetails'
import SearchBox from './components/searchBox/SearchBox'
import { Movie } from './models/movie';

function App() {
  const [movie, setMovie] = useState<Movie | null>(null);

  return (
    <div id='eggBox'>
      <div id='searchBox'>
        <SearchBox movie={movie} setMovie={setMovie} />
      </div>
      <div id='movieDetails'>
        <MovieDetails />
      </div>
    </div>
  )
}

export default App
