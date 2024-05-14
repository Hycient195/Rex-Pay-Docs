import HelpfullPage from "@SharedComponents/HelpfulPage"

interface IProps {
  children: React.ReactNode
}

export default function Layout({ children }: IProps) {
  return (
    <>
      {children}
      <HelpfullPage />
    </>
  )
}