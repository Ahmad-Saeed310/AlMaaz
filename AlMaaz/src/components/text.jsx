import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


function Text({ children = "Text", className = "" }) {
  const textRef = useRef(null)

  useEffect(() => {
    if (textRef.current) {
      // Animate text sliding up from bottom with mask
      gsap.fromTo(
        textRef.current,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }, [])

  return (
    <>
    <div className="overflow-hidden">
      <div 
        ref={textRef}
        className={`text-[5vh] ${className}`}
      >
        {children}
      </div>
    </div>
    </>
  )
}

export default Text