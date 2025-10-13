import React from 'react'
import Nav from './nav'

function Firstpage() {
  return (
    <>
    <div className='w-full h-screen bg-blue-200 bg-[url("https://cdn.cosmos.so/f1107e50-466e-4d32-ad99-90d1685ed386?format=jpeg")] bg-cover bg-contain bg-center relative'>
<Nav />

    <div id="text" className='flex justify-between w-full px-4 font-semibold text-base font-[Inter] text-white absolute top-1/2  transform -translate-y-1/2'>
      <h5 >FEATURED PROJECTS</h5>
      <h5>NAWAZ FARM HOUSE</h5>
      <h5>2025</h5>
      <a href="https://www.example.com">View Project</a>
    </div>

  <div className='absolute bottom-3 px-4 py-4 w-full flex justify-between items-end'>
<h3 className='font-semibold font-[Inter] text-white  text-4xl tracking-tighter'>AlMaaz Architecture style is defined by <br />
strong, solid forms with subtle elegance,<br />
natural balance and enduring appeal</h3>

<h5 className='text-xl font-semibold font-[Inter] text-white '>(ScrollDown)</h5>
    </div> 

</div>
    </>
  )
}

export default Firstpage