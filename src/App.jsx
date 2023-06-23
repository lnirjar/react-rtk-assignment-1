import { useState } from 'react'
import { ComponentAView } from "./features/componentA/ComponentAView";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <ComponentAView />
    </div>
  )
}

export default App
