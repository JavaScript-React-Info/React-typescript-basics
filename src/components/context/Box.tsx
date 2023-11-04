

import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Box = () => {
    let {primary, secondary} = useContext(ThemeContext)
    
  return (
    <div style={{backgroundColor: primary.main, color: primary.text}}>Theme context</div>
  )
}

export default Box