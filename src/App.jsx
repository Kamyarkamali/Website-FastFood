import "./styles/main.css";

//components
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import HeadLine from "./Components/HeadLine/HeadLine";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <HeadLine/>
    </div>
  )
}

export default App
