import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { cn } from 'utils/styling'

export interface TextInputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  type?: 'text' | 'password' | 'email' | 'date' | 'month' | 'number' | 'time'
  sizing?: 'sm' | 'md' | 'lg'
  helperText?: string | ReactNode
}

export const InputField = forwardRef<HTMLInputElement, TextInputGroupProps>(
  (props, ref) => {
    const { label, type = 'text', sizing = 'md', className, helperText, ...rest } = props

    return (
      <div className={cn('my-2', className)}>
        {label && (
          <label
            className="block mb-1 font-medium text-gray-900"
            htmlFor={rest.id}
          >{`${label} ${rest.required ? '*' : ''}`}</label>
        )}
        <input
          ref={ref}
          type={type}
          {...rest}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />
        {helperText && (
          <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    )
  },
)

InputField.displayName = 'InputField'
