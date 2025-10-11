import React from 'react'

function Nav() {
  return (
   <>
    <div id="logo">AlMaaz</div>
    <div id="elems">
        <li>
            <a>PROCESS</a>
            <ul>STUDIO</ul>
            <ul>ABOUT</ul>
            <ul>WORKS</ul>
        </li>
    </div>
<div id="contact" className="text-white cursor-pointer bg-black border border-black px-auto py-[2vh] h-[3vh] w-[10vw] text-center items-center flex hover:text-black hover:bg-white hover:border-none">GET IN TOUCH</div>

   </>
  )
}

export default Nav