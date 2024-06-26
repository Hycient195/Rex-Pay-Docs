interface IProps {
  children: React.ReactNode | string,
  className?: string
}

export const ListGroup = ({ children, className}: IProps) => {
  return (
    <ul className={`flex flex-col gap-2 mt-2 mb-12 ${className}`}>{children}</ul>
  )
}

interface IListItemProps {
  children: React.ReactNode | string,
  index: number,
  className?: string
}

export const ListItem = ({ children, className, index }: IListItemProps) => {
  return (
    <li className={`flex flex-row items-start text-sm gap-3 text-slate-800 ${className}`}>
      <div className="text-slate-800 text-sm bg-gray-300 flex items-center justify-center w-5 h-5 p-2 mt-1 rounded-full">{index+1}</div>
      {children}
    </li>
  )
}