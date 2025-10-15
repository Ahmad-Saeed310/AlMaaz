import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const VARIANT_CLASSES = {
  images: "h-[120vh] w-[40vw] object-cover mt-[5vh] ml-[2vw]",
  images2: "h-[120vh] w-[40vw] object-cover mt-[5vh] ml-[2vw]",
  required: "h-[40vh] w-[30vw] object-cover mt-[5vh]",
  responsive: "w-full h-auto object-cover",
  cover: "w-full h-full object-cover",
  contain: "w-full h-auto object-contain",
  avatar: "w-12 h-12 rounded-full object-cover",
  rounded: "rounded-lg object-cover",
  thumbnail: "w-32 h-32 object-cover rounded-md",
  decorative: "w-full h-auto object-cover pointer-events-none select-none",
  square: "w-48 h-48 object-cover",
}

function Img({
  src,
  alt = "",
  variant = "responsive",
  className = "",
  width,
  height,
  style,
  lazy = true,
  onClick,
  animation = "fade-up", // "fade-up", "fade-in", or "scale-up"
  duration = 1.2,
  ...rest
}) {
  const imgRef = useRef(null)
  const variantCls = VARIANT_CLASSES[variant] || VARIANT_CLASSES.responsive

  const inlineStyle = { ...(style || {}) }
  if (width !== undefined)
    inlineStyle.width = typeof width === "number" ? `${width}px` : width
  if (height !== undefined)
    inlineStyle.height = typeof height === "number" ? `${height}px` : height

  useEffect(() => {
    if (!imgRef.current) return

    let fromVars = { opacity: 1, scale: 1.01 }
    let toVars = { opacity: 1, duration, ease: "power3.out" ,scale: 1}

   

    gsap.fromTo(imgRef.current, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 95%", // animation starts when image top hits 80% of viewport
        toggleActions: "play none none reverse", // replay when scrolling back
      },
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [animation, duration])

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`${variantCls} ${className}`.trim()}
      style={inlineStyle}
      loading={lazy ? "lazy" : "eager"}
      onClick={onClick}
      {...rest}
    />
  )
}

export default Img
