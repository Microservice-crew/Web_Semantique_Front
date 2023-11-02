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
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost";
import CreateReclamation from "./components/CreateReclamation";
import CreateUser from "./components/CreateUser";

import CreateEvent from "./components/CreateEvent";
import UpdateEvent from "./components/UpdateEvent";

import CreateGroup from "./components/CreateGroup";
import UpdateGroup from "./components/UpdateGroup";
import CreateReact from "./components/CreateReact";


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
          <Route path="/addNewPost" element={<CreatePost />} />
          <Route path="/updatePost/:id" element={<UpdatePost />} />
               <Route path='/addGroup' element={<CreateGroup/>} />
          <Route path='/updateGroup' element={<UpdateGroup/>} />
          <Route path="/Events" element={<Events />} />
              <Route path='/addNew' element={<CreateEvent/>} />
          <Route path='/addNewReact' element={<CreateReact/>} />
          <Route path='/updateEvent/:id' element={<UpdateEvent/>} />
          <Route path="/Groups" element={<Groups />} />
          <Route path="/Reacts" element={<Reacts />} />
          <Route path="/Reclamations" element={<Reclamations />} />
          <Route path="/addNewReclamation" element={<CreateReclamation />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/addNewUser" element={<CreateUser />} />
          <Route path="/VerifUsers" element={<VerifUsers />} />
          <Route path="/Chat" element={<Chat />} />


          {/* Other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
