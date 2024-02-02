import { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react'

export interface CheckboxFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | ReactNode
  helperText?: string | ReactNode
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CheckboxField: React.FC<CheckboxFieldProps> = (props) => {
  const { label, helperText, ...rest } = props

  return (
    <div className="flex items-center justify-center gap-2">
      <input
        type="checkbox"
        {...rest}
        id={rest.id}
        checked={rest.checked}
        onChange={rest.onChange}
        className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <div className="flex-col items-center justify-center">
        <label htmlFor={rest.id} className="font-medium text-gray-900 dark:text-gray-300">
          {label}
        </label>
        {helperText && (
          <div className="text-sm text-gray-500 dark:text-gray-400">{helperText}</div>
        )}
      </div>
    </div>
  )
}
