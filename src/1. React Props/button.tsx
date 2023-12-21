
import React from 'react'

type Color = "red"| "blue"| "green"

type ButtonProps = {
    // backgroundColor: string,
    backgroundColor: Color,
    fontSize: number,
    buttonEnabled?: boolean,
    // padding?: number[] // we can gibve more number of array
    padding?: [number, number, number, number], //tuple
    style?: React.CSSProperties,
    borderRadius: Record<string, number>,
    // onClick: ()=> void
    onClick: (test: string) => number,
    children: React.ReactNode,
    // children: JSX.Element
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const Button = (props: ButtonProps) => {
    const {backgroundColor, fontSize, style, borderRadius, onClick, children} = props;
  return (
    <button className='button-class' style={style}>
        {children}
    </button>
  )
}

export default Button