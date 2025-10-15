import React, { useEffect, useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Text({ children = 'Text', className = '', variant = 'words' }) {
  const containerRef = useRef(null)

  // Normalize children to string and split into tokens depending on variant
  const tokens = useMemo(() => {
    const text = typeof children === 'string' ? children : String(children)
    if (variant === 'lines') {
      // split into lines (preserve empty lines)
      return text.split('\n')
    }
    // default: split into words and spaces
    return text.split(/(\s+)/)
  }, [children, variant])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const targets =
      variant === 'lines'
        ? el.querySelectorAll('.line > .line-inner')
        : el.querySelectorAll('span.word')
    // cleanup any previous ScrollTrigger animations
    let ctx = gsap.context(() => {}, el)

    // animate words with a slight stagger when scrolled into view
    ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: variant === 'lines' ? 0.08 : 0.03,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
           
          }
        }
      )
    }, el)

    return () => {
      try {
        ctx.revert()
      } catch {
        // ignore
      }
    }
  }, [tokens, variant])

  return (
    <div className="overflow-hidden">
      <div ref={containerRef} className={`text-black ${className}`.trim()}>
        {variant === 'lines'
          ? tokens.map((line, i) => (
              <div key={`l-${i}`} className="line overflow-hidden">
                <span className="line-inner inline-block w-full">{line}</span>
              </div>
            ))
          : tokens.map((tok, i) => {
              if (/^\s+$/.test(tok)) {
                // render spaces as plain text to preserve spacing
                return <span key={`s-${i}`}>{tok}</span>
              }
              return (
                <span key={`w-${i}`} className="word inline-block mr-1">
                  {tok}
                </span>
              )
            })}
      </div>
    </div>
  )
}

export default Text