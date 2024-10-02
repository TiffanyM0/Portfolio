import React from "react"
// tailwind playgrouond. end goal is scroll animation. 
import background from "./wave.jpg"
const Home = (props) => {
  
  return (
    <div className="bg-cover bg-center h-screen" style={{backgroundImage: `url(${background})`}}>
      <div className="content-center grid grid-cols-2" >
        <h1 className="text-lime-400 font-bold text-7xl">Welcome to my Portfolio</h1>
        <h1 className="text-blue-600 font-bold text-7xl"> Other text to be on the side</h1>
      </div>
      <div className="grid grid-cols-3">
        <p className="hover:text-lime-400 hover:font-bold text-4xl">Websites</p>
        <p className="hover:text-lime-400 hover:font-bold text-4xl">Databases</p>
        <p className="hover:text-lime-400 hover:font-bold text-4xl">Games</p>
      </div>
        <p className="hover:text-lime-400 hover:font-bold text-4xl">I do it all</p>  
        <p className="hover:text-lime-400 hover:font-bold text-4xl">addin cool animation to this page</p>
    </div>
  )
};

export default Home;
