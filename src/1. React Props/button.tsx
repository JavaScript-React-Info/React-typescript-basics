
import React, { Component, ComponentProps } from 'react'


// type ButtonProps = {
//   type: 'submit' | 'reset' | 'button',
//   autoFocus?: boolean
// }
// no need to pass native elements as props. we can directly use

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant? : "primary" | "secondary"
}
//React.ComponentProps<"a">
//React.ComponentProps<"img"> 


const Button = ({
  type,
  autoFocus,
  variant,
  ...rest
}: ButtonProps) => {

  return (
    <button className='button-class' type={type} autoFocus={autoFocus} {...rest}>
      Click me
    </button>
  )
}

export default Button