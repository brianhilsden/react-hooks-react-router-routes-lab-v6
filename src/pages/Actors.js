import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { act } from "react";

function Actors() {
  const [actors,setActors] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/actors")
    .then(res=>res.json())
    .then(data=>setActors(data))
  },[])
  if(!actors[0]){
    return(
    <>
    <NavBar/>
    <h1>Actors Page</h1>
    <p>Loading...</p>
    </>) 
  }
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map(item=>{
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

export default Actors;
