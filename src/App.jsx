import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import React,{ useState } from 'react';


function App() {
  const [mode,setMode] = useState('light');

  const tleMode=()=>{
    if(mode==='light'){
     setMode('dark');
      document.body.style.backgroundColor='#0d1829';
    }else{
     setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} tleMode={tleMode}/>
    <div className='container my-3'>
    <TextForm heading="Enter the text to analyze below" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}
export default App;
