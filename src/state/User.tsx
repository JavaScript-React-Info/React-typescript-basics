

import React, { useState } from 'react'

type AutUser = {
    name: string,
    email: string
}

const User = () => {
    const [user, setUser] = useState<AutUser | null>(null)
    const handleLogin = () => {
        setUser({
            name: "shubham",
            email: "abc@gmail.com"
        })
    }

    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Login</button>
        <div>User name is {user?.name}</div>
        <div>User email is {user?.email}</div>
    </div>
  )
}

export default User