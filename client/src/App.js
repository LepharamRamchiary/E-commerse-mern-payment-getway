import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
