import React from 'react'
import MainBtn from '../Components/MainBtn'
import Level1 from '../Components/Level1'
import Level2 from '../Components/Level2'
import Level3 from '../Components/Level3'

const levelData=[
  {id:1, name:"Level1", password:"45us6Ab9#t", component: Level1},
  {id:2, name:"Level2", password:"53z=1O?Ml?L0",component:Level2},
  {id:3, name:"Level3", password:"45us6Ab9#t",component:Level3},
  
  
]



export default function MainMenu({ onSelectLevel }) {
  return (
    <>
      <h1>Welcome to Web Arcade</h1>
      <MainBtn data={levelData} onSelect={onSelectLevel} />
    </>
  ) }