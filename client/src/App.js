import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/addContact" element={<AddEdit />} />
          <Route path="/view/:id" element={<View/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
