// import { AnimatePresence } from "framer-motion";
// import React from "react";
// import { Outlet, Route, Routes, useLocation } from "react-router-dom";
// import FAQ from "../pages/FAQ";
// import ForgotPassword from "../pages/ForgotPassword";
// import Login from "../pages/Login";
// import { Public } from "../pages/Public";
// import Register from "../pages/Register";
// import TestPage from "../pages/TestPage";

// const AnimateRoutes = () => {
//   const location = useLocation();
//   return (
//     <AnimatePresence>
//       <Routes location={location} key={location.pathname}>
//         <Route index element={<Public />} />
//         <Route path="login" element={<Login />} />
//         <Route path="register" element={<Register />} />
//         <Route path="test" element={<TestPage />} />
//         <Route path="faq" element={<FAQ />} />
//         <Route path="forgot-password" element={<ForgotPassword />} />
//       </Routes>
//     </AnimatePresence>
//   );
// };

// export default AnimateRoutes;
