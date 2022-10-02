import './App.css';
import { useEffect, useState } from 'react';

function App() {

  

  
    const [quote, setQuote] = useState([])

    
      
      
      const fetchData = () => {
        fetch("https://api.quotable.io/random")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setQuote(data)
      })
      }
  
    


    useEffect(() => {
      
      fetchData()
    },[])

  return (
    <div className="App">
      <div className='quote'> 
        <h1>{quote.author}</h1>
        <h3>{quote.content}</h3>
       
        <button onClick={fetchData}>New quote</button>
        
      </div>
      
      
      
    
    </div> 
  );
}

export default App;
