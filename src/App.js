
import { Payment } from '@mui/icons-material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import AddService from './Pages/Dashboard/AddService/AddService';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DefaultDashboard from './Pages/Dashboard/Dashboard/DefaultDashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import Review from './Pages/Dashboard/Review/Review';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/about' element={<PrivateRoute><About /></PrivateRoute>}></Route>

            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route exact path='/dashboard' element={<DefaultDashboard />}></Route >
              <Route path={`/dashboard/payment`} element={<Payment />}></Route>
              <Route path={`/dashboard/review`} element={<Review />}></Route>
              <Route path={`/dashboard/myOrder`} element={<MyOrder />}></Route>
              <Route path={`/dashboard/makeAdmin`} element={<MakeAdmin />}></Route>
              <Route path={`/dashboard/addService`} element={<AddService />}></Route>
            </Route>

            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
