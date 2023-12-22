
import React, { Component, ComponentProps, useEffect, useRef, useState } from 'react';

const buttonOption = [
  "option-1",
  "option-2",
  "option-3"
] as const;
//using as const will have only the above array not string[]

type User = {
  sessionId: string,
  name: string
}

type Guest = Omit<User, "name">


type ButtonColor = "red" | "blue" | "green"


const Button = () => {


  useEffect(()=>{
    const previousButtonColor = localStorage.getItem("buttonColor") as ButtonColor
  }, [])

  return (
    <button>
      {
        buttonOption.map((option)=>{
          return option
        })
      }
    </button>
  )
}

export default Button