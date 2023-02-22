import React, { ButtonHTMLAttributes, FC } from 'react'
import { CustomButtonContainer, IconContainer } from './button'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode
}


export const CustomButton: FC<CustomButtonProps> = ({ children, startIcon, ...rest }) => {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}

      {children}
    </CustomButtonContainer>
  )
}
