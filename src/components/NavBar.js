import React from "react"

const NavBar = (props) => {
  return (
    <div className="flex justify-around text-cyan-200 py-2">
      <a className="hover:decoration-solid" href="/">Home</a>
      <a className="hover:decoration-solid" href="/about">About</a>
      <a className="hover:decoration-solid" href="/work">Work</a>
      <a className="hover:decoration-solid" href="/contact">Contact</a>
    </div>
  )
};

export default NavBar;
