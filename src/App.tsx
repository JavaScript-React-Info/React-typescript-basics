import Container from "./components/Container"
import Box from "./components/context/Box"
import { ThemContextProvider } from "./components/context/ThemeContext"
import User from "./components/context/User"
import { UserContextProvider } from "./components/context/UserContext"
import Counter from "./state/Counter"
import LoggedIn from "./state/LoggedIn"


const App = () => {
  return (
    <div>
     <UserContextProvider>
      <User/>
     </UserContextProvider>
    </div>
  )
}

export default App