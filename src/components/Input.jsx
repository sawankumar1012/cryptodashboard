import React from 'react'

const Input = ({className,variant,color,size,children,...restProps}) => {
    const variants = {
        fill: {
          white: "bg-white text",
          black: "bg-black text-white",
          gray:'bg-gray-100 text-white ',
        },
        outline: {
          white: "border border-white text",
          black: "border border-black text",
          gray:'border border-gray-200 text-gray-400 ',
        },
      };
  
      const sizes = {
        sm: "h-[40px] max-w-[200px] py-1 px-2",
        md: "40px",
        lg: "h-[80px] max-w-[200px] py-3 px-4",
      };
  return (
  <>
  <input className={`${className} ${sizes[size]} ${variants[variant][color]} -pb-4`} {...restProps}>
    {children}
        </input>
  </>
  )
}

export default Input