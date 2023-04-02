import React, {useState, useEffect} from "react"

import { Card } from "./components/Card"
import "./style/global.css"

function App() {
  const [studentName, setStudentName] = useState()
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({ name: '', avatar: ''})

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }

    setStudents(prevState =>[...prevState, newStudent])
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/weslleyolli')
      const data =  await response.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    }

    fetchData()
  }, [])
  return (
    <div className="flex items-center flex-col">
      <header className="m-20 mb-6 w-1/2 flex justify-between items-center">
      <h1 className="font-bold text-2xl" >List of Attendance</h1>
      <div className="flex items-center">
        <strong>{user.name}</strong>
        <img className="w-14 h-14 rounded-full ml-2" src={user.avatar} alt="Photo of perfil" />
      </div>
      </header>
      <input 
        className="w-1/2 p-6 bg-slate-300 rounded border-0 text-base" 
        type="text" 
        placeholder="Enter your name..." 
        onChange={e => setStudentName(e.target.value)}
      />
      <button 
        className="w-1/2 p-6 font-bold bg-red-400 text-white rounded mt-3 mb-20 hover:bg-red-500 transition duration-200 ease-in-out text-base" 
        type="button"
        onClick={handleAddStudent}
      >
      Add</button>
      {
        students.map(student => (
          <Card 
            key={student.time}
            name={student.name} 
            time={student.time} 
          />
        ))
        
      }
    </div>
  )
}

export default App
