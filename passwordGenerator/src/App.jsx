import { useState,useCallback,useEffect } from 'react'
import './App.css'

function App() {
     const [length,setLength]=useState('8');
     const [password,setPassword]=useState('');
     const [number,setNumber]=useState(false);
     const [character,setCharacter]=useState(false);

    //  this function generate the password
     const generatePassword=useCallback(()=>{
      let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const num="0123456789";
      const specialChar="!@#$%^&*()_+-=[]{}|;:',.<>?/`~";
      let pass=""
      if(number){
        str+=num;
      }
      if(character){
        str+=specialChar;
      }
      for(let i=0;i<length;i++){
            let char=Math.floor(Math.random()*str.length+1);
            pass+=str[char];
      }
      setPassword(pass);
     },[length,setPassword,number,character])

     useEffect(()=>{
        generatePassword()
     },[generatePassword,number,character,length])

  return (
    <>
   <div className='h-screen bg-[#212121]'>
     <div className=" h-full flex flex-col justify-center items-center  p-6 ">
  {/* This portion is text area of pass and copy button */}
  <div className="w-[435px]  flex justify-center items-center rounded-lg">
    <input
      type="text"
      value={password}
      className="h-full w-full p-4 text-white bg-white-400 rounded-lg bg-red-400 text-lg"
    />
    <button className="capitalize ml-0.5 bg-blue-400 hover:bg-blue-200 p-4 rounded-lg">
      copy
    </button>
  </div>
  <div className='w-full gap-2 flex items-center justify-center my-3'>
  <input 
  type="range" 
  min={8} 
  max={100} 
  value={length}
  onChange={(e)=>setLength(e.target.value)}
  className=" w-[100px] accent-blue-500"
/>
<label htmlFor="" className='flex text-white '>Length: {length}</label>
 
<input type="checkbox" className='bg-red-400'
defaultChecked={character}
onChange={()=>{
  setCharacter((before)=> !before)
}}
/>
<label htmlFor="" className='flex text-white '>Add Character</label>
<input type="checkbox" className='bg-red-400'
  defaultChecked={number}
onChange={()=>{
  setNumber((before)=> !before);
}}

/>
<label htmlFor="" className='flex text-white '>Add Number</label>
  
  </div>
  
</div>

   </div>


    </>
  )
}

export default App
