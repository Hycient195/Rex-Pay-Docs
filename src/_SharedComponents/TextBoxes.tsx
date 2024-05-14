interface IProps {
  children: React.ReactNode | string,
  className?: string
}

export const InfoBox = ({ children, className }: IProps) => {
  return (
    <div className={`grid grid-cols-[max-content_1fr] mt-8 mb-6 text-slate-800 gap-3 xl:gap-4 rounded-xl p-4 xl:p-6 border border-gray-400/60 bg-gray-100 ${className}`}>
      <div className="w-[10%]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="">
        {children}
      </div>
    </div>
  )
}

export const WarningBox = ({ children, className }: IProps) => {
  return (
    <div className={`grid grid-cols-[max-content_1fr] mt-12 mb-8 text-slate-800 gap-3 xl:gap-4 rounded-xl p-4 xl:p-6 border border-red-300/60 bg-red-50 ${className}`}>
      <div className="w-[10%] text-red-600/70">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="">
        {children}
      </div>
    </div>
  )
}