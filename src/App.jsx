import { useState } from 'react'
import "./App.css"
import MainMenu from './Pages/MainMenu'

function App() {
  const [selectedLevel, setSelectedLevel] = useState(null)

  return (
    <>
      {!selectedLevel && (
        <MainMenu onSelectLevel={setSelectedLevel} />
      )}

      {selectedLevel && (
        <>
        <selectedLevel.component />


          <button onClick={() => setSelectedLevel(null)}>
            Back to Menu
          </button>  
        </>
      )}
    </>
  )
}

export default App
