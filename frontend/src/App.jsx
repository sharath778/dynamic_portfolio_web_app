import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import HeaderNav from "./landingPage/Header.jsx";
import Welcome from './landingPage/Welcome.jsx';
import Login from './loginPage/Login.jsx';
import SignUp from './loginPage/SignUp.jsx';
import Landing from './landingPage/Landing.jsx';
import UpdateForm from './detailsForm/UpdateForm.jsx'
import DetailsForm from './detailsForm/DetailsForm.jsx';
import {Toaster} from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';


function App() {
  const {authUser} = useAuthContext();
  return (
    <div className='app flex flex-col justify-center'>
      
      <HeaderNav/>
      <Routes>

          <Route path="/" element={<Welcome/>}/>
          <Route path="/login" element={authUser ?<Navigate to="/"/> : <Login/>}/>
          <Route path="/signup" element={authUser ?<Navigate to="/"/> : <SignUp/>}/>
          <Route path="/details" element={<DetailsForm/>}/>
          <Route path="/update/details" element={<UpdateForm/>}/>
      </Routes>
      <Toaster/>
      
      
    </div>
  )
}

export default App
