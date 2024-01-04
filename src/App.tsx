
import React, { useCallback } from 'react'

type HeadingProps = {
  title: string
}

const Heading = (props: HeadingProps)=> (
  <h2>{props.title}</h2>
)

type BoxProps = {
  children: React.ReactNode
}

// const Box = (props: BoxProps) => (
//   <div>
//     {props.children}
//   </div>
// )
const Box : React.FunctionComponent<{children: React.ReactNode}>= (props) => (
  <div>
    {props.children}
  </div>
)

const List: React.FunctionComponent<{items: string[], onClick? : (item :string)=> void}> = ({items, onClick})=>(
  <ul>
    {
      items.map((item, index)=>(
        <li key={index} onClick={() => onClick?.(item)}>{item}</li>
      ))
    }
  </ul>
)

const App = () => {
  const onListClick = useCallback((item: string)=>{
    alert(item)
  }, [])

  return (
    <div>
      <Heading title="Introduction"/>
      <Box>
        Hello there
      </Box>
      <List items={["one", "two", "three"]} onClick={onListClick}/>
    </div>
  )
}

export default App