
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Navbar } from './component/Navbar';
import { Footer } from './component/Footer';
import Cart from './component/Cart';
import Map from './component/Map';
function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"element={<Map/>} />
        <Route path="/cart"element={<Cart/>} />
        <Route path="/cart"element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
