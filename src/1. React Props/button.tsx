
import React, { Component, ComponentProps, useEffect, useRef, useState } from 'react';

// we need to use , after <T,> in JSX
// const converToArray = <T,>(value: T): T[] =>{
//     return [value]
// }

// function converToArray<T>(value:T): T[]{
//   return [value]
// }

// converToArray("5")
// converToArray(6);
// converToArray(true)


type ButtonProps<T> = {
  countValue: T,
  countHistory: T[]
}

const Button = <T,>({
  countValue,
  countHistory
}: ButtonProps<T>) => {

  return (
    <button>
      Click Me
    </button>
  )
}

export default Button