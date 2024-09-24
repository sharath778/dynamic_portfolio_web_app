import {useState} from 'react'
import{toast}from "react-hot-toast";
import { useAuthContext } from '../context/AuthContext.jsx';
const useLogout = () => {
  const {setAuthUser} = useAuthContext();
  const [loading, setLoading]=useState(false);
  const logOut = async ()=>{
    setLoading(true);
    try{
        const res = await fetch("/api/auth/logout",{
            method:'POST',
            headers:{"Content-Type":"application/json"}
        });
        const data = await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        localStorage.removeItem("logged-user");
        setAuthUser(null);
    }catch(error){
        console.error(error.message);
        toast.error(error.message);
    }finally{
        setLoading(false);
    }
  };
  return {loading, logOut};
}

export default useLogout;