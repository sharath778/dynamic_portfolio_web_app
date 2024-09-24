import React from 'react';
import {Link} from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext.jsx';
import Landing from './Landing';

const Welcome = () => {
  const {authUser} = useAuthContext();
  return (
    <>
      {authUser ? <Landing/> :
      (<div className=" flex flex-col justify-center h-[80vh] w-full bg-red ">
          <h1 className='self-center text-xl font-bold'>Welcome to explore!</h1>
          <div className="flex flex-row justify-center ">
              <Link to="/login"><button className="btn btn-info w-[10wh]">Login</button></Link>
          </div>
      </div>)}
    </>
  )
}

export default Welcome