import Container from "./components/Container"
import Box from "./components/context/Box"
import { ThemContextProvider } from "./components/context/ThemeContext"
import User from "./components/context/User"
import { UserContextProvider } from "./components/context/UserContext"
import DomRef from "./components/ref/DomRef"
import Counter from "./state/Counter"
import LoggedIn from "./state/LoggedIn"


const App = () => {
  return (
    <div>
     <DomRef/>
    </div>
  )
}

export default App