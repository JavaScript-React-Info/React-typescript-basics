

import React, { useEffect, useRef } from 'react'

const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        inputRef.current?.focus()
    },[])

  return (
    <div>
        <input
        type=''
        ref={inputRef}
        placeholder="enter something"
        />

    </div>
  )
}

export default DomRef