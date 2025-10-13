import React from 'react'

// Reusable image component with variants
const VARIANT_CLASSES = {
    required: 'h-[40vh] w-[30vw] object-cover  mt-[5vh]  ',
  responsive: 'w-full h-auto object-cover',
  cover: 'w-full h-full object-cover',
  contain: 'w-full h-auto object-contain',
  avatar: 'w-12 h-12 rounded-full object-cover',
  rounded: 'rounded-lg object-cover',
  thumbnail: 'w-32 h-32 object-cover rounded-md',
  decorative: 'w-full h-auto object-cover pointer-events-none select-none',
  square: 'w-48 h-48 object-cover',
}

function Img({
  src,
  alt = '',
  variant = 'responsive',
  className = '',
  width,
  height,
  style,
  lazy = true,
  onClick,
  ...rest
}) {
  const variantCls = VARIANT_CLASSES[variant] || VARIANT_CLASSES.responsive

  // allow inline width/height overrides (e.g. "100px" or numeric values)
  const inlineStyle = { ...(style || {}) }
  if (width !== undefined) inlineStyle.width = typeof width === 'number' ? `${width}px` : width
  if (height !== undefined) inlineStyle.height = typeof height === 'number' ? `${height}px` : height

  return (
    <img
      src={src}
      alt={alt}
      className={`${variantCls} ${className}`.trim()}
      style={inlineStyle}
      loading={lazy ? 'lazy' : 'eager'}
      onClick={onClick}
      {...rest}
    />
  )
}

export default Img