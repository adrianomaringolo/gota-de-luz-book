import React from 'react'

export interface FormNumberedAreaProps {
  number: number
  text: string
}

export const FormNumberedArea = (
  props: React.PropsWithChildren<FormNumberedAreaProps>,
) => {
  const { number, text, children } = props

  return (
    <>
      <h3 className="text-2xl font-semibold flex gap-3 items-center border-t pt-6">
        <span className="bg-[#f2e4ee] w-10 h-10 rounded-full flex justify-center items-center">
          {number}
        </span>
        {text}
      </h3>
      <div className="pl-14">{children}</div>
    </>
  )
}
