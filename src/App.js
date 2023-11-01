import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reacts from "./components/Reacts";
import Groups from "./components/Groups";
import Events from "./components/Events";
import Reclamations from "./components/Reclamations";
import Users from "./components/Users";
import VerifUsers from "./components/VerifUsers";
import Chat from "./components/Chat";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {" "}
          {/* Utilize the Routes component to define your routes */}
          <Route path="/" element={<Home />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Groups" element={<Groups />} />
          <Route path="/Reacts" element={<Reacts />} />
          <Route path="/Reclamations" element={<Reclamations />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/VerifUsers" element={<VerifUsers />} />
          <Route path="/Chat" element={<Chat />} />
          {/* Other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
