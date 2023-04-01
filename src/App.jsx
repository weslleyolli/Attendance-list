import React, {useState} from "react"

import { Card } from "./components/Card"
import "./style/global.css"

function App() {
  const [studentName, setStudentName] = useState()
  return (
    <div className="flex items-center flex-col">
      <h1 className="m-20 mb-6 font-bold text-2xl" >Name: {studentName}</h1>
      <input 
        className="w-1/2 p-6 bg-slate-300 rounded border-0 text-base" 
        type="text" 
        placeholder="Enter your name..." 
        onChange={e => setStudentName(e.target.value)}
      />
      <button 
        className="w-1/2 p-6 font-bold bg-red-400 text-white rounded mt-3 mb-20 hover:bg-red-500 transition duration-200 ease-in-out text-base" 
        type="button"
      >Add</button>
      <Card name="Gael" time="10:55:25" />
      <Card name="Camile" time="12:35:15" />
    </div>
  )
}

export default App
