import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DashLayout from "./components/DashLayout";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { Public } from "./pages/Public";
import Register from "./pages/Register";
import GameView from "./pages/GameView";
import TestPage from "./pages/TestPage";
import MissingPage from "./pages/MissingPage";
import FAQ from "./pages/FAQ";
import ForgotPassword from "./pages/ForgotPassword";
import {AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          {/* public routes  */}
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="test" element={<TestPage />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="forgot-password" element={<ForgotPassword />} />

          <Route element={<PrivateRoute />}>
            <Route path="dash" element={<DashLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="game" element={<GameView />} />
            </Route>
          </Route>
          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
