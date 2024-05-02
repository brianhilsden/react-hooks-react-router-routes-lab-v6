import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors,setDirectors] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/directors")
    .then(res=>res.json())
    .then(data=>setDirectors(data))
  },[])

 
  if(!directors[0]){
    return (
    <>
      <NavBar/>
      <h1>Directors Page</h1>
      <p>Loading...</p>
    </>)
    
  }
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map(item=>{
          return <article key={item.id}>
            <h2>{item.name}</h2>
            <ul>
              {item.movies.map((movie,index)=>{
                return <li key={index}>{movie}</li>
              })}
            </ul>
          </article>
        })}
      </main>
    </>
  );
};

export default Directors;
