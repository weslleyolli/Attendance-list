import "./style/global.css"

function App() {
  return (
    <div className="flex items-center flex-col">
      <h1 className="m-20 mb-6">Attendance list</h1>
      <input className="w-1/2 p-6 bg-slate-300 rounded border-0 text-base" type="text" placeholder="Enter your name..." />
      <button 
        className="w-1/2 p-6 font-bold bg-red-400 text-white rounded mt-3 mb-20 hover:bg-red-500 transition duration-200 ease-in-out text-base" 
        type="button"
      >Add</button>
    </div>
  )
}

export default App
