import { useState,useEffect } from "react";
function Hello(){
  useEffect(()=>{
    console.log('created');
    return ()=>console.log("by");
  },[])
  return(
    <h1>Hello</h1>
  )
}

function Cleanup(){
  const [showing,setShowing] = useState(false);
  const onClick=()=>{
    setShowing((current)=>!showing);
  }
  return(
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  )

}
export default Cleanup;