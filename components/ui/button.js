import { cn } from '@/lib/utils'

const buttonVariants = {
  solid: 'bg-brand-600 hover:bg-brand-700 text-white shadow-md hover:shadow-lg',
  outline: 'border-2 border-brand-600 text-brand-600 hover:bg-brand-50',
  ghost: 'text-brand-600 hover:bg-brand-50',
  secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-900',
}

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-4 py-2 text-base rounded-lg',
  lg: 'px-6 py-3 text-lg rounded-lg',
}

export function Button({
  children,
  variant = 'solid',
  size = 'md',
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
