

import React, { useEffect, useState } from 'react'

const UseEffect = () => {

   const [count, setCount] = useState(0);
   const [name, setName] = useState('Mazhar');

   useEffect(()=>{
    document.title = `count : ${count}`
   },[count])

 

  useEffect(()=>{
 console.log(name);
 
  },[name])

  return (
    <>
      <h1 style={{textAlign:'center', marginTop:'70px'}}>Wel Come To UseEffect Hook in React JS...!</h1>
      <div style={{textAlign:'center'}}>

      <h3>Count : {count}</h3>
      <button onClick={(e)=>setCount(count+1)}>Increment</button>
      <br />
      <br />
      <br />
      <h3>Name : {name}</h3>
     <br />
     <br />
  <input type="text" 
  value={name}
  onChange={(e)=> setName(e.target.value)} />


      </div>


    </>
  )
}

export default UseEffect;
