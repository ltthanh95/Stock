import {type ChangeEvent, type SyntheticEvent, useState} from 'react'
import "./App.css"
import Navbar from "./Components/Navbar/Navbar.tsx";
import {Outlet} from "react-router"
import {UserProvider} from "./Context/useAuth.tsx";
import {ToastContainer} from "react-toastify";
function App() {
    
  return (
    <>
        <UserProvider>
            <Navbar />
            <Outlet />
            <ToastContainer />
        </UserProvider>

    </>
  )
}

export default App
