import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import DataComponent from './Components/Working/DataComponent';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        
        <DataComponent/>
       
      </div>
    </>
  )
}

export default App
