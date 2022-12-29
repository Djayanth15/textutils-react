import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null) 

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = '#042649'
      showAlert("Dark Mode has been enabled!", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled!", "success")
    }
  }

  return (
    <>
      {/* <Navbar title="Textutils2" aboutText="About" /> */}
      {/* <Router> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} /> 
      <div className='container my-3'>
      {/* <Routes> */}
        {/* <Route exact path="/about" element={<About/>} /> */}
        {/* <Route exact path="/" element={ */}
        <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
         {/* } /> */}
      {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
