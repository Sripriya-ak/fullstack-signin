
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import Show from "./components/Show.jsx";

function App() { 
   

  return (
    <>
    <Router>
     <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />}/>
        <Route exact path="/show" element={<Show />}/>
     </Routes>
   </Router>
      
    </>
  )
}

export default App
