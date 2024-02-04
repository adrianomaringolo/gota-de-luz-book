import React, { ButtonHTMLAttributes } from 'react'
import { cn } from 'utils/styling'

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { onClick, children, className, ...rest } = props
  return (
    <button
      className={cn(
        'text-white bg-[#5F28B9] hover:bg-[#310F69]',
        'focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mb-2',
        'disabled:bg-gray-400 disabled:cursor-not-allowed',
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
