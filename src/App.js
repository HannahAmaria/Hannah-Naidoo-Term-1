import { Routes } from "react-router-dom";
import { Route } from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import Comparative from "./components/Comparative";

function App() {
  return (

    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/Timeline" element = {<Timeline/>}/>
        <Route path="/Comparative" element = {<Comparative/>}/>
      </Routes>
    </div>

  );
}

export default App;
