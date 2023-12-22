
import React, { Component, ComponentProps, useState } from 'react'

type User = {
  name: string,
  age: number
}

type Posts ={
  name: string,
  age: number
}[]


const Button = () => {
  const [count, setCount] = useState(0)
  //const [count, setCount] = useState<number>(0) //<number> is not neccessary because typescript will infer this by default

   const [text, setText] = useState("Click me")
  //const [text, setText] = useState<string>("Click me") //<string> is not neccessary because typescript will infer this 

  const [isPrimary, setPrimary]= useState(true);
  //const [isPrimary, setPrimary]= useState<boolean>(true)//<boolean> is not neccessary because typescript will infer this 

  const [user, setUser]= useState<User|null>(null);

  const [posts, setPosts] = useState<Posts>([])


  const name = user?.name;

  const postName = posts[0].name

  return (
    <button >
      Click me
    </button>
  )
}

export default Button