import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const params = useParams()
  const movieId = params.id 
  const [movie,setMovie] = useState({})
  useEffect(()=>{
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(res=>res.json())
    .then(data=>setMovie(data))

  },[movieId])


  if(!movie.title){
    return <p>Loading...</p>
  }
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map((item,index)=>{
          return <span key={index}>{item}</span>
        })}
      </main>
    </>
  );
};

export default Movie;
