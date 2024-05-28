interface IProps {
  text?: string,
  isMandatory?: boolean
  type?: string
}

export default function Param({ text, isMandatory = true, type }: IProps) {
  return (
    <h3 className="text-slate-800 my-4 text-lg">
      <span className="text-slate-800 font-bold tracking-wide">{text}</span>
      { isMandatory && <span className="text-red-500">*</span> }
    <span className="px-3 py-1 text-xs ml-2 rounded-md border-gray-300 border bg-gray-100">{type}</span></h3>
  )
}