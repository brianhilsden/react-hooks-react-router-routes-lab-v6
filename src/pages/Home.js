import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movieList,setMovieList] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/movies")
    .then(res=>res.json())
    .then(data=>setMovieList(data))
  },[])
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Home Page</h1>
        {movieList.map(movie=>{
          return <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        })}
      </main>
    </>
  );
};

export default Home;
