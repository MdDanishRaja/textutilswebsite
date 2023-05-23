import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/TextForm';
import React, {useState} from 'react';
import About from './components/About';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
} from "react-router-dom";
import Registration from './components/Registration';

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = (cls)=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
  <>
  <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Registration/>
        <Alert alert={alert} />
        <div className="container mt-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}> </Route>
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Try TextUtilis - Word Counter, Charecter Counter, Remove Extra spaces" mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
