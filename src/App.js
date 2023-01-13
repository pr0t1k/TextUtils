import './App.css';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled",("Success"));
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='rgb(4 18 18)';
      showAlert("Dark mode has been enabled",("Success"));
    }
  }
  return (
    <div>
    <Router>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
      <Route path="/About" element={<About />}> </Route>
      <Route path="/" element={<TextForm heading="ENTER THE TEXT TO ANALYZE" mode={mode} showAlert={showAlert}/>}></Route>
      </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
