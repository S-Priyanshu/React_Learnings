
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';


function App(props) {
  const [mode, setMode] = useState('light');// whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message ,type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=() =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled" , "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success")
    }
  }
  return (
     <>
     <Navbar title="TextUtils" aboutText ="About" mode={mode} toggleMode={toggleMode}/>

     <Alert alert={alert}/>

     {/* <div className="container my-3">
     <About/>
     </div> */}

     <div className="container my-3">
     <TextForm heading ="Enter text to Analyse" showAlert={showAlert}  mode={mode}/>
     </div>

      
    
     </>
  );
}

export default App;
  