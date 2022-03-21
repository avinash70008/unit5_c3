import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Home from "./components/Home"


function App() {
  return (
    <div className="App">
      {/* <AllRoutes /> */}
      <Navbar/>
      <Home/>
      <Products/>
    </div>
  );
}

export default App;