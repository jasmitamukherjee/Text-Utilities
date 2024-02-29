
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('dark')
  const [alert, setAlert] = useState(null);

  const showAlert= (message,type)=>{

    setAlert({
      msg: message,
      type : type
    })

    setTimeout(()=>{
      setAlert(null);
    },3000);
    }

  

  const toggleMode =()=>{
    if(mode === 'light'){
      // alert('clicked')
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
    }
  }


  
  return (
    <Router>
   
    <div className="App">

    <Navbar title="Text Utilities" mode={mode} enableDarkMode={toggleMode}/>
    <div className="container my-3">
      <Alert alert={alert}/>
   <Routes>
   
  

   <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Try Text Utilities- Word Counter, Character Counter, Case Changer" mode={mode}/>}/>
    <Route exact path="/about" element={<About mode={mode}/>}/>

    
    </Routes>
    </div>
  
    </div>
    
   
    </Router>
  );
}


export default App;
