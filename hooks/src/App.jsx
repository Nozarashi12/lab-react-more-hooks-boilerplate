import { useState } from 'react'
import './App.css'
import ListBody from './Components/listbody'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
     <div>
      <ListBody/>
     </div>
    </>
  )
}

export default App
