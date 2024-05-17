import React from 'react'

const Button = ({className,variant='fill',color='white',size='sm',onClick=null,children,shape='round',active=false,...restProps}) => {
    const variants = {
        fill: {
          white: "bg-white text-black border border-black",
          black: "bg-black text-white ",
          blue:`${active?'bg-white text-black':'bg-blue-500 text-white'} border border-blue-500 `
        },
        outline: {
          white: "border border-white text",
          black: "border border-black text",
        },
      };
      
      const sizes = {
        sm: "h-10 min-w-[50px] px-2 py-1 text-sm ",
        md: "h-[50px] min-w-[150px] py-2 px-3",
        lg: "h-[70px] min-w-[200px] py-3 px-4",
      };
      const shapes={
        circle:'rounded-full',
        square:'rounded-none',
        round:'rounded-xl',
      }
  return (
  <>
  <button className={`${className} ${sizes[size]} ${variants[variant][color]} ${shapes[shape]}`} {...restProps} onClick={onClick} >
{children}
  </button>
  </>
  )
}

export default Button