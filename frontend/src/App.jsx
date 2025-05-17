import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Signin from './components/Signin'
import {Routes,Route} from 'react-router-dom'
function App() {
const [name, setName] = useState("");
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState("");
  
  return (
   <Routes>
    <Route path="/home" element={<Home/>} />
    <Route index element={<Signin name={name} setName={setName} password={password} setPassword={setPassword} email={email} setEmail={setEmail}/>}/>
</Routes>
   
  )
}

export default App
