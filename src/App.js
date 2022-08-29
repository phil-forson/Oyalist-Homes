
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomeDetails from "./components/HomeDetails";
import LandingScreen from "./components/LandingScreen";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingScreen />} />
        <Route exact path="/home/:homeId" element={<HomeDetails />}/>
      </Routes>
    
    </Router>

    </>
  );
}

export default App;
