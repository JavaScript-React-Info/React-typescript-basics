
import React, { Component, ComponentProps } from 'react'


const Button = () => {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log("clicked");
  
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  )
}

export default Button