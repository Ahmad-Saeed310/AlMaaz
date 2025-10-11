import React from 'react'

function Button({ 
  text = "GET IN TOUCH", 
  onClick, 
  className = "",
  variant = "dark" // 'dark' or 'light'
}) {
  const variants = {
    dark: {
      base: "bg-black text-white  hover:bg-white",
      hoverText: "text-black"
    },
    light: {
      base: "text-white  ",
      hoverText: "text-white"
    }
  }

  const currentVariant = variants[variant]

  return (
    <button 
      onClick={onClick}
      className={`
        relative rounded-full cursor-pointer border
        px-6 py-2.5 w-fit
        flex items-center justify-center
        overflow-hidden group 
        transition-all duration-300
        ${currentVariant.base}
        ${className}
      `}
    >
      {/* First text - slides up on hover */}
      <span className="transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
        {text}
      </span>
      
      {/* Second text - slides in from bottom on hover */}
      <span className={`
        absolute inset-0 flex items-center justify-center 
        transition-all duration-300 ease-in-out 
        translate-y-full opacity-0 
        group-hover:translate-y-0 group-hover:opacity-100
        ${currentVariant.hoverText}
      `}>
        {text}
      </span>
    </button>
  )
}

export default Button