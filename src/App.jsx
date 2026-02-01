import { useState } from 'react'
import Level1 from './Components/Level1'
import Level2 from './Components/Level2'
import Level3 from './Components/Level3'
import "./App.css"
import MainMenu from './Pages/MainMenu'


//default data
const levelData=[
  {id:1, name:"Level1", password:"45us6Ab9#t",locked: false, component: Level1},
  {id:2, name:"Level2", password:"53z=1O?Ml?L0",locked:true,component:Level2},
  {id:3, name:"Level3", password:"45us6Ab9#t",locked:true,component:Level3},
  
  
]

function App() {
  const [levels, setLevels] = useState(levelData);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [unlockedlevel, setunlockedlevel] = useState(null);
  
  //checks if levels are open or not
  const handleLevelClick=(level)=>{
    if(!level.locked){
      //if it's open select it
      setSelectedLevel(level);
    }else{
      //otherwise pop up the modal
      setunlockedlevel(level);
    }
  
  }
  const handleUnlock= (password)=>{
      if(password == unlockedlevel.password){
        setLevels((prev)=> prev.map((upd)=> upd.id === unlockedlevel.id ? {...upd, locked:false}: upd));
        setSelectedLevel(unlockedlevel);
        setunlockedlevel(null);
        
      }
  }


  return (
    <>
      {!selectedLevel && (
        <MainMenu 
         onSelectLevel={setSelectedLevel}
         data={levelData} 
         levels={levels} 
         unlockedLevel={unlockedlevel} 
         onLevelClick={handleLevelClick} 
         onUnlock={handleUnlock} 
         onCloseModal={()=>setunlockedlevel(null)}/>
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
