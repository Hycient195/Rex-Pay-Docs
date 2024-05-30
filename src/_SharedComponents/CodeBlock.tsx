"use client"

import { useRef, useState } from "react"

interface IProps {
  children: React.ReactNode | string,
  language?: Array<string>
  className?: string,
  copy?: boolean
}

export default function CodeBlock({ children, language, className, copy }: IProps) {
  const [selectedLangauge, setSelectedLangauge] = useState<string | any>(language && language[0] as string);
  
  const [isSuccessfullyCopied, setIsSuccessfullyCopied] = useState(false)
  const codeSnippetContainer = useRef(null)

  const copyCodeContent = () => {
    const codeBlockContainer = codeSnippetContainer.current as unknown as HTMLDivElement
    const codeBlock = codeBlockContainer.firstElementChild
    const codeSnippet = codeBlock?.textContent ?? ''

    // copy code snippet
    navigator.clipboard.writeText(codeSnippet)
      .then(() => {
        setIsSuccessfullyCopied(true)
        // reset icon state
        setTimeout(() => setIsSuccessfullyCopied(false), 3000);
      })
      .catch(err => false);
  }
  
  return (
    <div className={`p-3 lg:p-4 xl:p-6 xl:py-8 my-3 overflow-x-auto bg-slate-600 text-slate-100 rounded-xl ${className}`}>
      {
        (copy || language)
        && (
          <div className="relative flex flex-row-items-center-gap-4 justify-between">
            {language &&
              <div className="flex flex-row items-center gap-2">
                {
                  language.map(each => (
                    <button key={each} onClick={() => setSelectedLangauge(each)} className={`mb-5 border-b-2 max-w-max px-1 font-semibold pb-1 ${each == selectedLangauge ? "border-b-red-400/90" : "border-b-transparent"}`}>{each}</button>
                  ))
                }
              </div>
            }
            {copy &&
              <button
                className="absolute -top-2 right-0 text-slate-100 h-max"
                onClick={copyCodeContent}
              >
                {
                  isSuccessfullyCopied
                    ? (
                      // copied
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                        <path fill="none" stroke="grey" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.35 3.836q-.099.316-.1.664c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75a2.3 2.3 0 0 0-.1-.664m-5.8 0A2.25 2.25 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0q-.563.035-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414q.564.035 1.124.08c1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5l3-3.75" />
                      </svg>
                    )
                    : (
                      // copy
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 0 1-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0 1 13.5 1.5H15a3 3 0 0 1 2.663 1.618ZM12 4.5A1.5 1.5 0 0 1 13.5 3H15a1.5 1.5 0 0 1 1.5 1.5H12Z" clipRule="evenodd" />
                        <path d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 0 1 9 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0 1 16.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625v-12Z" />
                        <path d="M10.5 10.5a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963 5.23 5.23 0 0 0-3.434-1.279h-1.875a.375.375 0 0 1-.375-.375V10.5Z" />
                      </svg>
                    )
                }
              </button>
            }
          </div>
        )
      }
      <div ref={codeSnippetContainer}>
        <pre className="">
          {children}
        </pre>
      </div>
    </div>
  )
}