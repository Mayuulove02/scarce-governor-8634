
import './App.css';
import { Footer } from './Components/Footer';
import Navbar from './Components/Navbar';


import HomePage from './Pages/HomePage';


// const snowFlake =document.createElement(tagName:"img")
// snowFlake.src= snowLogo

// const images


function App() {
  return (
    <div className="App">
      <Navbar />
      
     <HomePage />
      <Footer />

    </div>
  );
}

export default App;
