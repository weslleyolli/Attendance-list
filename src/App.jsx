import "./style/global.css"

function App() {
  return (
    <div className="flex items-center flex-col">
      <h1 className="m-20 mb-6">Attendance list</h1>
      <input className="w-1/2 p-6 bg-slate-300 rounded border-0" type="text" placeholder="Enter your name..." />
      <button type="button">Add</button>
    </div>
  )
}

export default App
