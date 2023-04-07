import './App.css'
import { Routes, Route } from 'react-router-dom'
import Create from './Components/Create/Create'
import Read from './Components/Read/Read'
import Update from './Components/Update/Update'
function App() {
  return (
    <div className="main">
      <label>BASIC CRUD OPERATIONS</label>
      <Routes>
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/read" element={<Read />} />
        <Route exact path="/update" element={<Update />} />
      </Routes>
      {/* <Create />
      <Read />
      <Update /> */}
    </div>
  )
}

export default App
