

import React from 'react'

type HeadProps ={
    children: string
}

const Heading = (props: HeadProps) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Heading