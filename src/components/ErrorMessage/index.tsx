import React, { FC } from 'react'
import { InputErrorMessage } from './error'

interface ErrorProps {
  children: React.ReactNode
}

export const ErrorMessage: FC<ErrorProps> = ({ children }) => {
  return (
    <InputErrorMessage>
      {children}
    </InputErrorMessage>
  )
}
