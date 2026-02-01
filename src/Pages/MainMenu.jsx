import {React,useState} from 'react'
import MainBtn from '../Components/MainBtn'





export default function MainMenu({ onSelectLevel, data, levels,unlockingLevel,onLevelClick,onUnlock,onCloseModal }) {

 const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");

  const submitPassword = ()=>{
    const success = onUnlock(passwordInput);
    if(!success){
      setError("Wrong password")

    }else{
      setPasswordInput("");
      setError("");
    }
  }
  return (
    <div>
    <h1>Welcome to Web Arcade</h1>

    {/* لیست Levelها */}
    {levels.map((level) => (
      <MainBtn
        key={level.id}
        text={level.name + (level.locked ? " 🔒" : "")}
        onClick={() => onLevelClick(level)}
      />
    ))}

    {/* Modal برای پسورد */}
    {unlockingLevel && (
      <div className="modal">
        <h3>{unlockingLevel.name}</h3>

        <input
          type="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          placeholder="پسورد مرحله"
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div style={{ marginTop: "10px" }}>
          <button onClick={submitPassword}>تایید</button>
          <button
            onClick={() => {
              setPasswordInput("");
              setError("");
              onCloseModal();
            }}
            style={{ marginLeft: "10px" }}
          >
            لغو
          </button>
        </div>
      </div>
    )}
  </div>
  )
}