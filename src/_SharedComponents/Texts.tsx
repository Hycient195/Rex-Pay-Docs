interface IProps {
  children: React.ReactNode | string,
  id?: string,
  className?: string
}

export const PageHeading = ({ children, id, className }: IProps) => {
  return <h1 id={id} className={`text-2xl font-bold text-slate-800 ${className}`}>{children}</h1>
}


export const Paragraph = ({ children, id, className }: IProps) => {
  return <p id={id} className={`py-3 xl:py-4 text-slate-800 ${className}`}>{children}</p>
}


export const ParagraphHeading = ({ children, id, className }: IProps) => {
  return <h2 id={id} className={`text-lg text-slate-800 font-bold mt-6 mb-4 ${className}`}>{children}</h2>
}
