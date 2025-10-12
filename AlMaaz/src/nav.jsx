import React from 'react'
import Logo from './components/Logo'
import Button from './components/button'

function Nav() {
  return (
   <div className='flex justify-between items-center px-1 w-full '>
    
   <Logo />
   <div className='flex items-center'>
   <   Button variant='light' className='text-black text-sm font-bold ' text='STUDIO,'   />
   <   Button variant='light' className='text-black text-sm font-bold' text='WORKS,'  />
   <   Button variant='light' className='text-black text-sm font-Inter font-bold' text='PROCESS,'  />
   <   Button variant='light' className='text-black text-sm font-bold' text='ABOUT'  />
</div>
<Button  className='text-base' text='GET IN TOUCH' />
   </div>
  )
}

export default Nav