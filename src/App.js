import * as React from 'react';
import AddUser from "./pages/Patient/AddUser";
import EditUser from "./pages/Patient/EditUser";
import UserList from "./pages/Patient/UserList";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {

  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list-user" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;