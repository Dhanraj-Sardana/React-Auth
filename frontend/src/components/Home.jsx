import Cookies from'js-cookie'
import { useEffect, useState } from 'react'
export default function Home() {
  const [username,setUserName]=useState('');
useEffect( ()=>{
  const handleServerRes= async ()=>{
  try{
const res=await fetch('http://localhost:3000/home',{
  credentials:'include'
});
if(res.status===200){
const data= await res.json();


setUserName(data.userName);
}
  }catch(err){
console.log(`error : ${err.message}`);

  }
}
handleServerRes();

},[]);
  return (
    <div>
      Home page {username}
    </div>
  )
}
