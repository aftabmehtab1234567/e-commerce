
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Navbar } from './component/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" />
        <Route path="/" />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
