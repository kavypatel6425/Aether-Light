// import { Route, Routes } from 'react-router-dom';
// import Index from './Project/Index';
// import Footer from './Project/Footer';
// import Test from './Project/Sidebar';
// import Add_to_Cart from './Project/Add_to_Cart';
// import Hanging from './Project/Product/Hanging';
// import Wall from './Project/Product/Wall';
// import Ceiling from './Project/Product/Ceiling';
// import NavBar from './Project/Navbar';
// import Chandelier from './Project/Product/Chandelier';
// import Floor from './Project/Product/Floor';
// import Table_lamp from './Project/Product/Table_lamp';
// import Outdoor_lights from './Project/Product/Outdoor_lights';
// import Mirror_lights from './Project/Product/Mirror_lights';
// import Login from './Project/Login';
// import Ragister from './Project/Ragister';
// import Admin from './Project/Admin Penal/Admin';
// import Edit_Api from './Project/Admin Penal/Edit_api';


// function Router() {
//   return (
//     <>
//       <Routes>
//         <Route path='/' element={<Index />}>
//           <Route path='navbar' element={<NavBar />} />
//           <Route path='footer' element={<Footer />} />
//         </Route>

//         <Route path='/hanging' element={<Hanging />} />
//         <Route path='/wall' element={<Wall />} />
//         <Route path='/ceiling' element={<Ceiling/>} />
//         <Route path='/chandelier' element={<Chandelier/>} />
//         <Route path='/floor' element={<Floor/>} />
//         <Route path='/tablelamp' element={<Table_lamp/>} />
//         <Route path='/outdoorlights' element={<Outdoor_lights/>} />
//         <Route path='/mirrorlights' element={<Mirror_lights/>} />


//         <Route path='test' element={<Test />} />
//         <Route path='/addcart' element={<Add_to_Cart />} />
//         <Route path='login' element={<Login/>} />
//         <Route path='ragister' element={<Ragister/>} />


//         <Route path='/admin' element={<Admin/>} />
//         <Route path='/editApi/:id' element={<Edit_Api/>} />
//       </Routes>
//     </>
//   )
// }

// export default Router

























// import { Route, Routes } from 'react-router-dom';
// import Index from './Project/Index';
// import Footer from './Project/Footer';
// import Test from './Project/Sidebar';
// import Add_to_Cart from './Project/Add_to_Cart';
// import Hanging from './Project/Product/Hanging';
// import Wall from './Project/Product/Wall';
// import Ceiling from './Project/Product/Ceiling';
// import NavBar from './Project/Navbar';
// import Chandelier from './Project/Product/Chandelier';
// import Floor from './Project/Product/Floor';
// import Table_lamp from './Project/Product/Table_lamp';
// import Outdoor_lights from './Project/Product/Outdoor_lights';
// import Mirror_lights from './Project/Product/Mirror_lights';
// import Login from './Project/Login';
// import Ragister from './Project/Ragister';
// import Admin from './Project/Admin Penal/Admin';
// import Edit_Api from './Project/Admin Penal/Edit_api';
// import ProtectedRoute from './ProtectedRoute';

// function Router() {
//   return (
//     <Routes>

//       {/* ❌ Public routes */}
//       <Route path='login' element={<Login />} />
//       <Route path='ragister' element={<Ragister />} />

//       {/* ✅ Protected routes */}
//       <Route path='/' element={
//         <ProtectedRoute>
//           <Index />
//         </ProtectedRoute>
//       } />

//       <Route path='/hanging' element={
//         <ProtectedRoute><Hanging /></ProtectedRoute>
//       } />

//       <Route path='/wall' element={
//         <ProtectedRoute><Wall /></ProtectedRoute>
//       } />

//       <Route path='/ceiling' element={
//         <ProtectedRoute><Ceiling /></ProtectedRoute>
//       } />

//       <Route path='/chandelier' element={
//         <ProtectedRoute><Chandelier /></ProtectedRoute>
//       } />

//       <Route path='/floor' element={
//         <ProtectedRoute><Floor /></ProtectedRoute>
//       } />

//       <Route path='/tablelamp' element={
//         <ProtectedRoute><Table_lamp /></ProtectedRoute>
//       } />

//       <Route path='/outdoorlights' element={
//         <ProtectedRoute><Outdoor_lights /></ProtectedRoute>
//       } />

//       <Route path='/mirrorlights' element={
//         <ProtectedRoute><Mirror_lights /></ProtectedRoute>
//       } />

//       <Route path='/addcart' element={
//         <ProtectedRoute><Add_to_Cart /></ProtectedRoute>
//       } />

//       {/* 🔐 Admin (also protected) */}
//       <Route path='/admin' element={
//         <ProtectedRoute><Admin /></ProtectedRoute>
//       } />

//       <Route path='/editApi/:id' element={
//         <ProtectedRoute><Edit_Api /></ProtectedRoute>
//       } />

//       {/* Optional */}
//       <Route path='test' element={
//         <ProtectedRoute><Test /></ProtectedRoute>
//       } />

//     </Routes>
//   )
// }

// export default Router;









import { Route, Routes } from 'react-router-dom';

// Pages
import Index from './Project/Index';
import Hanging from './Project/Product/Hanging';
import Wall from './Project/Product/Wall';
import Ceiling from './Project/Product/Ceiling';
import Chandelier from './Project/Product/Chandelier';
import Floor from './Project/Product/Floor';
import Table_lamp from './Project/Product/Table_lamp';
import Outdoor_lights from './Project/Product/Outdoor_lights';
import Mirror_lights from './Project/Product/Mirror_lights';
import Add_to_Cart from './Project/Add_to_Cart';

import Login from './Project/Login';
import Ragister from './Project/Ragister';

import Admin from './Project/Admin Penal/Admin';
import Edit_Api from './Project/Admin Penal/EditUser';
import ProductPage from './ProductPage';

import ProtectedRoute from './ProtectedRoute';
import Checkout from './Checkout';
import Users from './Project/Admin Penal/Users';
import Products from './Project/Admin Penal/Products';
import Orders from './Project/Admin Penal/Orders';
import EditUser from './Project/Admin Penal/EditUser';

function Router() {
  return (
    <Routes>

      {/* ✅ PUBLIC ROUTES */}
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ragister" element={<Ragister />} />

      {/* 🔒 PROTECTED ROUTES */}
      <Route element={<ProtectedRoute />}>

        <Route path="/hanging" element={<Hanging />} />
        <Route path="/wall" element={<Wall />} />
        <Route path="/ceiling" element={<Ceiling />} />
        <Route path="/chandelier" element={<Chandelier />} />
        <Route path="/floor" element={<Floor />} />
        <Route path="/tablelamp" element={<Table_lamp />} />
        <Route path="/outdoorlights" element={<Outdoor_lights />} />
        <Route path="/mirrorlights" element={<Mirror_lights />} />
        <Route path="/addcart" element={<Add_to_Cart />} />

        {/* Admin */}
        <Route path="/admin" element={<Admin />} />
        <Route path="users" element={<Users />} />
       {/* <Route path="edit-user/:id" element={<EditUser />} /> */}
       <Route path="edit-user/:id" element={<EditUser />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />



        {/* <Route path="/editApi/:id" element={<Edit_Api />} /> */}
        <Route path="/product/:category/:id" element={<ProductPage />} />
        <Route path="/checkout/:category/:id" element={<Checkout />} />
      </Route>

    </Routes>
  );
}

export default Router;
