import { useEffect } from "react";
import "./styles/main.css";

//components
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import HeadLine from "./Components/HeadLine/HeadLine";
import Food from "./Components/Food/Food";
import Catigry from "./Components/Catiyg/Catigry";
import Footer from "./Components/Footer/Footer";

function App() {

  useEffect(()=>{
    document.title="Fast Food KAMyR"
  },[])

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <HeadLine/>
      <Food/>
      <Catigry/>
      <Footer/>
    </div>
  )
}

export default App
