import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Products from "./Pages/Products";
import AddProducts from "./Pages/AddProduct";
import UpdateProducts from "./Pages/UpdateProduct";
import Logout from "./Pages/Logout";
import Profile from "./Pages/Profile"
import Footer from "./Components/Footer";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Products />} />
            <Route path="/AddProducts" element={<AddProducts />} />
            <Route path="/UpdateProducts" element={<UpdateProducts />} />
            <Route path="/Logout" element={<Logout />} /> 
            <Route path="/Profile" element={<Profile />} />
            <Route path="SignUp" element={<SignUp/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
