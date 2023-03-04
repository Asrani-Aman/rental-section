import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Navbar/nav";
import Hero from "./components/Hero/Hero";
import Main from "./components/main/Main";
import Rentals from "./components/Rental/rental.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Main />
      <Rentals />
    </div>
  );
}

export default App;
