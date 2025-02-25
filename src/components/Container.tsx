import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
}

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`max-w-container mx-auto flex px-4 xl:px-0 ${className}`}>
      {children}
    </div>
  )
}

export default Container
