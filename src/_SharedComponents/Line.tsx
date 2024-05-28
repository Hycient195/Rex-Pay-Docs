interface IProps {
  className?: string
}

export default function Line({ className }: IProps) {
  return (
    <div className={`h-px bg-slate-200 w-full my-4 ${className}`} />
  )
}