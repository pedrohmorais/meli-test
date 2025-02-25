import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
}

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`max-w-container mx-auto flex ${className}`}>
      {children}
    </div>
  )
}

export default Container
