import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Edit from './pages/Edit';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/edit/:id' element={<Edit/>} />
      </Routes>
    </Router>
  );
}

export default App;
