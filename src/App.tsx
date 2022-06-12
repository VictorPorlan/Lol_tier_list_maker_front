import { useEffect, useState } from 'react';
import { Buffer } from 'buffer';
import './App.css';
import axios from 'axios';
function App() {
  const [baseImage, setBaseImage] = useState<string>("")
  useEffect(() => {
    async function fetchSkin(){
      const data = await axios.get('http://localhost:3001/skin/7')
      setBaseImage(Buffer.from(data.data[0].splashart).toString('base64'));    
    }
    fetchSkin()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={`data:image/jpeg;base64,${baseImage}`} alt={"prueba"}/>
      </header>
    </div>
  );
}

export default App;
