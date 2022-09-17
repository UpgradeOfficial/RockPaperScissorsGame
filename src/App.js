import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import DashLayout from './components/DashLayout';
import Layout from './components/Layout';
import Login from './pages/Login';
import { PrivateRoute } from './components/PrivateRoute';
import { Public } from './components/Public';
import Register from './pages/Register';



function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route element={<PrivateRoute />}>
        <Route path="dash" element={<DashLayout />}>
              <Route index element={<Dashboard/>}/>
        </Route>
            
        </Route>

      </Route>
    </Routes >
  );
}

export default App;
