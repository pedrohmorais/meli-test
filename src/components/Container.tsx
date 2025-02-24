import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className: string
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`max-w-4xl mx-auto flex items-center ${className}`}>
      {children}
    </div>
  )
}

export default Container
