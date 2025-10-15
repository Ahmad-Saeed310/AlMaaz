import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// smooth scrolling with Lenis + GSAP ScrollTrigger integration
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function initLenis() {
  const lenis = new Lenis({
    duration: 1.0,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smooth: true,
    direction: 'vertical'
  })

  function raf(time) {
    lenis.raf(time)
    // ensure ScrollTrigger updates while Lenis animates
    ScrollTrigger.update()
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // also trigger ScrollTrigger on Lenis events
  lenis.on('scroll', () => ScrollTrigger.update())

  // scroller proxy so ScrollTrigger can read/write scroll position
  ScrollTrigger.scrollerProxy(document.documentElement, {
    scrollTop(value) {
      if (arguments.length) {
        lenis.scrollTo(value)
      }
      // try to return lenis internal value if available
      return lenis.scroll || document.documentElement.scrollTop
    }
  })

  return lenis
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

if (typeof window !== 'undefined') {
  initLenis()
}
