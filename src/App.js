import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reacts from './components/Reacts';
import Groups from './components/Groups';
import Events from './components/Events';
import Reclamations from './components/Reclamations';
import Users from './components/Users';
import CreateGroup from "./components/CreateGroup";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* Utilize the Routes component to define your routes */}
          <Route path='/Posts' element={<Posts />} />
          <Route path='/Events' element={<Events />} />
          <Route path='/Groups' element={<Groups />} />
          <Route path='/Reacts' element={<Reacts />} />
          <Route path='/Reclamations' element={<Reclamations />} />
          <Route path='/Users' element={<Users />} />
          <Route path='/addGroup' element={<CreateGroup/>} />
          {/* Other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
