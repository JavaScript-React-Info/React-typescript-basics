import Container from "./components/Container"
import Box from "./components/context/Box"
import { ThemContextProvider } from "./components/context/ThemeContext"
import Counter from "./state/Counter"
import LoggedIn from "./state/LoggedIn"
import User from "./state/User"


const App = () => {
  return (
    <div>
      <ThemContextProvider>
        <Box/>
      </ThemContextProvider>
    </div>
  )
}

export default App