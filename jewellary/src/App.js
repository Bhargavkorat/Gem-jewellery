import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Homeui/Home/Home';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import Faq from './Components/Pages/Faq/Faq';
import Contectus from './Components/Pages/Contectus/Contectus';
import TermsCondition from './Components/Pages/TermsCondition/TermsCondition';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy/PrivacyPolicy';
import Login from './Components/Login/Login';
import { setLogIn, setUser } from './redux/userloginSlice/userSlice';
import { loginuser } from './https/axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Components/Homeui/Product/Product';
import Productdetail from './Components/Homeui/ProductDetails/Productdetail';
import Cart from './Components/Cart/Cart';
import Mywishlist from './Components/Userpage/Mywishlist/Mywishlist';
import Myorder from './Components/Userpage/Myorder/Myorder';
import loadinganim from './images/loader.gif'



function App() {
  const { isLoggedIn } = useSelector(state => state.userinfo)
  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchData() {
      const userdata = await loginuser()
      if (userdata) {
        if (userdata.data.token === undefined) {
          dispatch(setLogIn(false))
        } else {
          dispatch(setUser(userdata.data))
          dispatch(setLogIn(true))
        }
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          {/* <Route exact path='/' element={ <Home />}></Route> */}
          <Route exact path='/' element={<PrivateRoute> <Home /></PrivateRoute>}></Route>
          <Route exact path='/login' element={<AuthRoute><Login /></AuthRoute>}></Route>
          <Route exact path='/aboutus' element={<PrivateRoute> <AboutUs /></PrivateRoute>}></Route>
          <Route exact path='/faq' element={<PrivateRoute> <Faq /> </PrivateRoute>}></Route>
          <Route exact path='/contactus' element={<PrivateRoute> <Contectus /> </PrivateRoute>}></Route>
          <Route exact path='/privacypolicy' element={<PrivateRoute> <PrivacyPolicy /> </PrivateRoute>}></Route>
          <Route exact path='/termscondition' element={<PrivateRoute> <TermsCondition /> </PrivateRoute>}></Route>
          <Route exact path='/cart' element={<PrivateRoute> <Cart /> </PrivateRoute>}></Route>
          <Route exact path='/myorder' element={<PrivateRoute> <Myorder /> </PrivateRoute>}></Route>
          <Route exact path='/mywishlist' element={<PrivateRoute> <Mywishlist /> </PrivateRoute>}></Route>
          <Route exact path='/product/:subcatagory' element={<PrivateRoute> <Product /> </PrivateRoute>}></Route>
          <Route exact path='/productdetails/:id' element={<PrivateRoute> <Productdetail /> </PrivateRoute>}></Route>
        </Routes>
      </Router >
      <ToastContainer />
    </>
  );
}

const PrivateRoute = ({ children }) => {
  const [fetchData, setFetchData] = useState(false)
  const { isLoggedIn } = useSelector(state => state.userinfo)
  let location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setFetchData(true)
    }, 2000);
  }, [])
  if (fetchData) {
    if (isLoggedIn === true) {
      return children
    }
    return <Navigate to={{ pathname: '/login', state: { from: location } }} />
  } else {
    return (
      <>
        <div className="container">
          <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
            <img src={loadinganim}  className="h-25" alt={"loader"} />
          </div>
        </div>
      </>
    )
  }
}
const AuthRoute = ({ children }) => {
  const [fetchData, setFetchData] = useState(false)
  const { isLoggedIn } = useSelector(state => state.userinfo)
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setFetchData(true)
    }, 2000);
  }, [])
  if (fetchData) {
    if (isLoggedIn !== true) {
      return children;
    }
    return <Navigate to={{ pathname: '/', state: { from: location } }} />
  } else {
    return (
      <>
        <div className="container">
          <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
            <img src={loadinganim} className="h-25" alt={"loader"} />
          </div>
        </div>
      </>
    )
  }
}
export default App;
