
import './App.css';
import AllRoutes from './Components/AllRoutes';
import { Footer } from './Components/Footer';
import Navbar from './Components/Navbar';
import Snowfall from 'react-snowfall'

// import HomePage from './Pages/HomePage';



// const snowFlake =document.createElement(tagName:"img")
// snowFlake.src= snowLogo

// const images


function App() {
  return (
    <div className="App">
      <Navbar />
      
     {/* <HomePage />*/}
     {/* <Snowfall style={{
                position: "fixed",
                width: "100vw",
                height: "100vh"
            }}
                snowflakeCount={180}

            /> */}
      <AllRoutes />
      
      <Footer /> 
    </div>
  );
}

export default App;
