import HelpfullPage from "@SharedComponents/HelpfulPage"

interface IProps {
  children: React.ReactNode
}

export default function Layout({ children }: IProps) {
  return (
    <div className="h-full grid grid-rows-[1fr_max-content]">
      {children}
      <HelpfullPage />
    </div>
  )
}