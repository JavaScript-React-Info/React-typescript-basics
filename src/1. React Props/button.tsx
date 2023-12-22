
import React, { Component, ComponentProps, useEffect, useRef, useState } from 'react';

import { type Color } from './types';

type ButtonProps = {
  color: Color
}

const Button = () => {
  return (
    <button>
      Click Me
    </button>
  )
}

export default Button