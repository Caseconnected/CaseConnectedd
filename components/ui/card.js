import { cn } from '@/lib/utils'

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200',
        className
      )}
      {...props}
    />
  )
}

export function CardContent({ className, ...props }) {
  return <div className={cn('p-6', className)} {...props} />
}

export function CardHeader({ className, ...props }) {
  return <div className={cn('p-6 border-b border-slate-200', className)} {...props} />
}

export function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn('text-xl font-bold text-brand-900', className)}
      {...props}
    />
  )
}

export function CardDescription({ className, ...props }) {
  return (
    <p
      className={cn('text-slate-600 text-sm mt-2', className)}
      {...props}
    />
  )
}
