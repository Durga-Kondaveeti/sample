import React, { useState } from 'react'

const App = () => {
  const arr=['cricket','football','basketball'];
  const [hidden,sethidden]=useState(false)
  const[data,setData]=useState(arr)
  console.log(data);
const deleteHandler=(value)=>
{
  const filtered_value = data.filter(datavalue=>datavalue!=value)
  console.log(data)
  setData(filtered_value)
  
}
const hiddenHandler=()=>
{
  if(hidden==="none") sethidden("")
  else sethidden("none")
}

  return (
    <div>

      <ul>
      {
        data.map((value,index)=>
        
          <ul key={index}>
            <input type='checkbox' checked={false}  onchange={()=>hiddenHandler()} />
            <li >{value}</li>
            <button onClick={()=>deleteHandler(value)} style={{display:hidden}}>delete</button>
          </ul>
        )

      }
      </ul>
    </div>
  )
}

export default App
