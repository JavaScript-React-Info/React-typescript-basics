

import { Stats } from 'fs'
import React from 'react'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'

const App = () => {
  const personName = {
    first: "shubham",
    last: "vinayak"
  }

  const personList = [
    { id: 0, name: "shubham", age: 26 },
    { id: 1, name: "vinayak", age: 62 },
    { id: 2, name: "nirmala", age: 50 }
  ]
  return (
    <div>
      {/* <Greet name="shubham" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList personList={personList}/> */}
      {/* <Status status='error'/> */}
      <Heading>
        Place Holder
      </Heading>
      <Oscar>
        <Heading>
          Oscar goes to someone
        </Heading>
      </Oscar>
      <Greet name='shubham' isLoggedIn={true}/>
    </div>
  )
}

export default App