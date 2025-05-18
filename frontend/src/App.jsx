import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Signin from './components/Signin'
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login'
function App() {
const [name, setName] = useState("");
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState("");
  
  return (
   <Routes>
    <Route path="/home" element={<Home/>} />
    <Route index element={<Signin />}/>
    <Route path='/login' element={<Login/>}></Route>
</Routes>
   
  )
}

export default App
