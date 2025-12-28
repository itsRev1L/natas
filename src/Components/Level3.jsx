import { useEffect } from 'react'
import React from 'react'


export default function Level3() {
  
  useEffect(() => {
    const handler = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handler);
  
    return () => document.removeEventListener("contextmenu", handler);
  }, []);
  return (
    <div className='card'  onContextMenu={(e) => e.preventDefault()}>
      <p>
        Great, now right clock aint working?? seriously???
      </p>
      <p hidden>password: 45us6Ab9#t</p>
    </div>
  )
}
