import React, { useState } from "react"

const VARIANT_CLASSES = {
  responsive: "w-[40vw] h-auto object-cover",
  cover: "w-[50vw] h-[40vw] object-cover ",
  responsive2: "w-[40vw] h-auto object-cover",
  cover2: "w-[50vw] h-[40vw] object-cover ",
  responsive3: "w-[40vw] h-auto object-cover",
  cover3: "w-[50vw] h-[40vw] object-cover ",

  contain: "w-full h-auto object-contain",
  rounded: "rounded-lg object-cover",
  thumbnail: "w-32 h-32 object-cover rounded-md",
  avatar: "w-12 h-12 rounded-full object-cover",
  decorative: "w-full h-auto object-cover pointer-events-none select-none",
  square: "w-48 h-48 object-cover",
}

function ImgCmp({
  src,
  alt = "",
  className = "",
  style,
  width,
  height,
  variant = "responsive",
  text,
  text2,
  text3,
  link, // 🆕 link for "View Project"
  textClass = "text-sm text-gray-700 mt-2 text-center",
}) {
  const [hovered, setHovered] = useState(false)

  // get variant class
  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.responsive
  const combinedClass = `${variantClass} ${className}`.trim()

  // text3 changes on hover
  const displayedText3 = hovered ? "View Project" : text3

  // handle click
  const handleClick = () => {
    if (hovered && link) {
      window.open(link, "_blank") // opens in new tab
    }
  }

  return (
    <div
      className="flex flex-col items-center transition-all duration-300 cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <img
        src={src}
        alt={alt}
        className={`${combinedClass} transition-transform duration-500 group-hover:scale-100`}
        style={style}
        width={width}
        height={height}
      />

      {/* Text content */}
<div id="text" className="flex justify-between w-full">


      <div id="text1" className="flex gap-4">

      {text && <p className={textClass}>{text}</p>}
      {text2 && <p className={textClass}>{text2}</p>}
      </div>

      {/* 🧠 Text 3 — Changes on hover */}
      {displayedText3 && (
        <p
          className={`${textClass} transition-all duration-300 ease-in ${
            hovered ? "text-yellow-500" : ""
          }`}
        >
          {displayedText3}
        </p>
      )}
      </div>
    </div>
  )
}

export default ImgCmp
