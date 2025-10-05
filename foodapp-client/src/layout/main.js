// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Navbar from '../Components/Navbar'
// import '../App.css'
// import Footer from '../Components/Footer'
// import AuthProvider from '../contexts/AuthProvider'
// const Main = () => {
//   return (
//     <>

//       <AuthProvider>
//         <Navbar />
//         <div className='min-h-screen'>
//           <Outlet />
//         </div>
//         <Footer />
//       </AuthProvider>
//     </>
//   )
// }

// export default Main
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../App.css";
import Footer from "../Components/Footer";
// import { AuthContext } from "../contexts/AuthProvider";
import AuthProvider from '../contexts/AuthProvider'
import LoadingSpinner from "../Components/LoadingSpinner";

const Main = () => {
  // const { user, loading } = useContext(AuthContext);
  return (
    <div>
      {/* {loading ? (
        <LoadingSpinner />
      ) : ( */}
        <AuthProvider>
          {" "}
          <Navbar />
          <div className="min-h-screen">
            <Outlet />
          </div>
          <Footer />
        </AuthProvider>
      {/* )} */}
    </div>
  );
};

export default Main;