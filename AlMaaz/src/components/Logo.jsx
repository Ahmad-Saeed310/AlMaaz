import React from 'react'
import gsap from 'gsap'

import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText);


function Logo() {
  return (
    <div className='text-[10vh] text-black font-[Inter] font-semibold'>AL MAAZ </div>
  )
}

export default Logo