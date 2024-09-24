import React from 'react';
import {Link} from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext.jsx';
import useLogout from '../Hooks/useLogout.js';
function HeaderNav() {
  const {loading, logOut}=useLogout(); 
  const {authUser}=useAuthContext();
  return (
  <div className="navbar bg-white z-30 top-0 fixed">
    <div className="navbar-start">
      <Link to="/">
        <span className="btn btn-ghost text-xl text-info">Portfolio</span>
      </Link>
    </div>
    <div className="navbar-end">
      {authUser?
        <>{ !loading ? 
          (<button className="btn btn-info mx-2"
          onClick={logOut}>Logout </button>):
          (<span className='loading loading-spinner'></span>)
        }</>:
        <><Link to="/login">
          <button className="btn btn-info mx-2">Login </button>
        </Link>
        <Link to="/signup">
          <button className="btn btn-info ">
            SignUp
          </button>
        </Link>
        </>
      }
        
        
  </div>
</div>
  )
}

export default HeaderNav;