import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Forms from './Components/Dashboard/Forms';
import Loading from './Components/Loading/Loading';
import Signin from './Components/Dashboard/Signin/Signin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/form" element={<Forms/>}/>
          <Route path="/loading" element={<Loading/>}/>
          <Route path="/signin" element={<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



