import React from 'react'

function Button({ 
  text = "GET IN TOUCH", 
  onClick, 
  className = "",
  variant = "dark", // 'dark' or 'light'
  textVariant = 'words', // 'none' | 'words' | 'lines'
  circle = 'right' // true | false | 'right' | 'none' - controls decorative circle
}) {
  const variants = {
    dark: {
      base: "bg-black text-white  hover:bg-black px-4 py-2 font-semibold",
      hoverText: "text-white"
    },
    light: {
      base: "text-white border-none px-1 py-1  ",
      hoverText: "text-white px-1 py-1 "
    }
  }

  const currentVariant = variants[variant]

  // helper: split text into tokens depending on variant
  const tokens = (() => {
    const s = typeof text === 'string' ? text : String(text)
    if (textVariant === 'lines') {
      // keep newline tokens
      return s.split(/(\n)/).filter(Boolean)
    }
    if (textVariant === 'words') {
      // split and keep spaces
      return s.split(/(\s+)/).filter(Boolean)
    }
    return [s]
  })()

  return (
    <button 
      onClick={onClick}
      className={`
        relative rounded-full cursor-pointer font-[Inter]
         w-fit
        flex items-center justify-center
        overflow-hidden group 
        transition-all duration-300
        ${currentVariant.base}
        ${className}
      `}
      aria-label={typeof text === 'string' ? text : undefined}
    >
      {/* First text - slides up on hover. We render tokens so they can stagger. */}
      <span className="transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0 inline-flex">
        {tokens.map((tok, i) => {
          // render whitespace tokens as non-breaking spaces to preserve spacing
          const isSpace = /^\s+$/.test(tok) || tok === '\n'
          if (isSpace) return <span key={`s-${i}`}>&nbsp;</span>
          return (
            <span
              key={`t1-${i}`}
              className="inline-block"
              style={{ transitionDelay: `${i * 28}ms` }}
            >
              {tok}
            </span>
          )
        })}
      </span>
      
      {/* Second text - slides in from bottom on hover. Tokens stagger similarly but slightly offset. */}
      <span className={`
        absolute inset-0 flex items-center justify-center 
        transition-all duration-300 ease-in-out 
        translate-y-full opacity-0 
        group-hover:translate-y-0 group-hover:opacity-100
        ${currentVariant.hoverText}
      `}>
        <span className="inline-flex">
          {tokens.map((tok, i) => {
            const isSpace = /^\s+$/.test(tok) || tok === '\n'
            if (isSpace) return <span key={`s2-${i}`}>&nbsp;</span>
            return (
              <span
                key={`t2-${i}`}
                className="inline-block"
                style={{ transitionDelay: `${i * 28 + 60}ms` }}
              >
                {tok}
              </span>
            )
          })}
        </span>
      </span>
      {((circle === true) || (circle === 'right')) && (
        <span
          aria-hidden="true"
          className={
            `absolute right-1 top-1/2 -translate-y-1/2 w-[.5rem] h-[.5rem] border border-white rounded-full flex items-center justify-center pointer-events-none transition-transform duration-300 group-hover:scale-70 group-hover:bg-white group-hover:opacity-100`
          }
        />
      )}
    </button>
  )
}

export default Button