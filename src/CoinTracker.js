import { useState,useEffect } from "react";

function CoinTracker(){
  const [loading,setLoading] = useState(true);
  const [coins,setCoins] = useState([]);
  const [price,setPrice] = useState(0);
  const [dollar,setDallar] = useState(0);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response)=>response.json())
      .then((json)=>{
        setCoins(json);
        setLoading(false);
      });
  },[]);
  const onChange=(e)=>{
    setPrice(e.target.value);
  }
  const changeDallar=(e)=>setDallar(e.target.value);
  return(
    <div>
      <h1>The Coins!{coins.length}</h1>
      <form>
        <label htmlFor="money">$</label><input onChange={changeDallar} id="money" type="text" placeholder="내 달러"/>
        <label>코인개수:{dollar!==0 ? dollar/price : 0}</label>
      </form>
      {loading ? 
      <strong>Loading...</strong> 
        : 
      <select onChange={onChange}>
        <option>Please Choose coin</option>
        {coins.map((item,index)=>(
          <option value={(item.quotes.USD.price).toFixed(3)} key={item.id}>
            {item.name} ({item.symbol}) : $ {(item.quotes.USD.price).toFixed(3)} USD
          </option>
        ))}
      </select>}
              
    </div>
  )

}

export default CoinTracker;