import { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react'

export interface CheckboxFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | ReactNode
  helperText?: string | ReactNode
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const RadioField: React.FC<CheckboxFieldProps> = (props) => {
  const { label, helperText, ...rest } = props

  return (
    <div className="flex items-center justify-center gap-2">
      <input
        type="radio"
        {...rest}
        id={rest.id}
        checked={rest.checked}
        onChange={rest.onChange}
        className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
      />
      <div className="flex-col items-center justify-center">
        <label htmlFor={rest.id} className="font-medium text-gray-900">
          {label}
        </label>
        {helperText && <div className="text-sm text-gray-500 ">{helperText}</div>}
      </div>
    </div>
  )
}
