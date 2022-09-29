import Button from "./Button";
import styles from "./App.module.css";
import { useState,useEffect } from "react";
function App() {
  const [value,setValue] = useState(0);
  const [keyword,setKeyword]= useState("");
  const onClick=()=>setValue((current)=>current + 1);
  const onChange=(event)=>setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(()=>console.log("Call the API..."),[]);//무조건 한번만 실행
  // keyword 가 바뀔때 실행(빈값이아니고 길이가 5보다 클 때)
  useEffect(()=>{
    if(keyword !=="" && keyword.length >5){
      console.log("SEARCH FOR",keyword)
    }
  },[keyword]);
  // keyword value 둘다 바뀔때 실행
  useEffect(()=>{
    console.log("keyword and value change")
  },[keyword,value]);
  
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h1 className={styles.title}>{value}</h1>
      <button onClick={onClick}>clickme</button>
    </div>
  );
}
export default App;