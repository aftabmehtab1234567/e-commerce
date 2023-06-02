
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Navbar } from './component/Navbar';
import Shop from './component/Shop';
import Cart from './component/Cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"element={<Shop/>} />
        <Route path="/cart"element={<Cart/>} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
