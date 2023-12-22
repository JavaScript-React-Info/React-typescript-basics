
import React, { Component, ComponentProps, useEffect, useRef, useState } from 'react'


const Button = () => {

  // useEffect doesnt need any type
  // useEffect(() => {
  //   return()=>{
  //   }
  // },[])

  const ref = useRef<HTMLButtonElement>(null);
  //Element
  //HTMLButtonElement
  //HTMLElement

  return (
    <button ref={ref}>
      Click me
    </button>
  )
}

export default Button