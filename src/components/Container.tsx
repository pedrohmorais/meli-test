import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-4xl mx-auto flex items-center">{children}</div>
}

export default Container
