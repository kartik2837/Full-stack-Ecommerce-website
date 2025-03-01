
// import React, { useState } from 'react'
// import Navbar from './Component/Navbar'
// import Sidebar from './Component/Sidebar'
// import { Routes, Route } from 'react-router-dom'
// import Add from './pages/Add'
// import List from './pages/List'
// import Orders from './pages/Orders'
// import Login from './Component/Login'
// import { ToastContainer } from 'react-toastify';

// export const backendUrl = import.meta.VITE_BACKEND_URL;
// console.log(backendUrl);



// const App = () => {
//   const [token, setToken] = useState('')

//   return (
//     <div className='bg-gray-50 min-h-screen'>
//       <ToastContainer />
//       {token === "" ? (
//         <Login setToken={setToken} />
//       ) : (
//         <>
//           <Navbar />
//           <hr />
//           <div className='flex w-full'>
//             <Sidebar />
//             <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
//               <Routes>
//                 <Route path='/add' element={<Add />} />
//                 <Route path='/list' element={<List />} />
//                 <Route path='/orders' element={<Orders />} />
//               </Routes>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   )
// }

// export default App





import React, { useEffect, useState } from 'react';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import Login from './Component/Login';
import { ToastContainer } from 'react-toastify';

export const backendUrl = 'http://localhost:8000'
console.log(backendUrl);
export const currency = '₹'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

  useEffect(() => {
    localStorage.setItem('token', token)

  }, [token])

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === '' ?
        <Login setToken={setToken} />
        :
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-full md:w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/order" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default App;

