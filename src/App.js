import React from "react";
// import './index.css';
import {BrowserRouter,Routes, Route,} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./components/Register/Login";
import BookingForm from "./components/Register/BookingForm";
import Searchresultpage from "./components/Register/Searchresultpage";
import Register from "./components/Register/Register";
import SearchItem from "./components/searchItem/SearchItem";



function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/hotels" element={<SearchItem/>}/>
        <Route path="/booking" element={<BookingForm/>}/>
        <Route path="/result" element={<Searchresultpage/>}/>
        <Route path="/about" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
