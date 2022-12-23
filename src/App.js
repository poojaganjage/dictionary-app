import {useState, useEffect} from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Definition from './components/Definition';
import './App.css';

function App() {
  const [meanings, setMeanings] = useState([]);
  const [input, setInput] = useState('');
  const dictionaryApiData = async() => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
      console.log(data.data);
      setMeanings(data.data);
      console.log(meanings[0].phonetics)
    } catch {
    }
  }

  useEffect(() => {
    dictionaryApiData();
  }, [input]);
  return (
    <div style={{background: '#067597', color: '#fff', height: '100vh'}}>
      <Container maxWidth='md' style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
        <Header input={input} setInput={setInput} />
        <Definition meanings={meanings} word={input} />
      </Container>
    </div>
  );
}
export default App;
