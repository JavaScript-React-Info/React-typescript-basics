
import React, { Component, ComponentProps, useEffect, useRef, useState } from 'react';

import { type Color } from './types';

type ButtonProps = {
  color: Color
}

const Button = () => {

  useEffect(()=>{
      fetch("https://jsonplcaeholder.typicode.com/todos/1")
      .then((response)=> response.json())
      .then((data: unknown)=>{ // instead of any it is better to have unknown
        // this will prevent having data.name.toUpperCase
        // we need to define schema for this

        // test with ZOD to have schema
      })
  },[])

  return (
    <button>
      Click Me
    </button>
  )
}

export default Button