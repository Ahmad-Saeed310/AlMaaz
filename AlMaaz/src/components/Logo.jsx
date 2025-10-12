import React from 'react'
import gsap from 'gsap'

import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText);


function Logo() {
  return (
    <div>

      <div className='text-[10vh] text-white font-[Inter] font-semibold leading-none'>AL MAAZ <span className='text-base ml-[-10px]'>Architect&Engineer</span> </div>
      
    </div>
  )
}

export default Logo