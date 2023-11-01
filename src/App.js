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
import CreateEvent from "./components/CreateEvent";
import UpdateEvent from "./components/UpdateEvent";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* Utilize the Routes component to define your routes */}
          <Route path='/Posts' element={<Posts />} />
          <Route path='/addNew' element={<CreateEvent/>} />
          <Route path='/updateEvent/:id' element={<UpdateEvent/>} />
          <Route path='/Events' element={<Events />} />
          <Route path='/Groups' element={<Groups />} />
          <Route path='/Reacts' element={<Reacts />} />
          <Route path='/Reclamations' element={<Reclamations />} />
          <Route path='/Users' element={<Users />} />
          {/* Other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
