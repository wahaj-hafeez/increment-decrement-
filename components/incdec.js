
import React,{ useState } from 'react'
import IncDec from '../components/incdec';
export default function Incdec(){
    
  const [number,setNumber]=useState(0);
    return (
        <div style={{display : "flex" , flexDirection : "inline",marginInline:"10"}}>
     <button onClick={()=>{setNumber(number+1)}} style={{ backgroundColor: "black",
  color: "white",
  fontSize: "20px",
  padding: "10px 40px",
  borderRadius: 50,
  margin: "30px 0px",
  cursor: "pointer"}}>
  Increment
</button>

       <h1 style={{margin : 10,fontSize : 70}}>{number}</h1>
       <button onClick={()=>{setNumber(number-1)}} style={{ backgroundColor: "black",
  color: "white",
  fontSize: "20px",
  padding: "10px 40px",
  borderRadius: 50,
  margin: "30px 0px",
  cursor: "pointer"}}>
  Decreament
</button>
     </div>
    )
}