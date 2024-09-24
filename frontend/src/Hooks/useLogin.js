import { useState } from "react"
import {useAuthContext } from "../context/AuthContext";
import {toast} from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();
  const loginUser = async ({username, password})=>{
    if(!handleInput({username, password})){
        return;
    }
    setLoading(true);
    try {
        const res = await fetch("/api/auth/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({username, password})
        });
        const data = await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        localStorage.setItem("logged-user",JSON.stringify(data));
        localStorage.setItem("data","true");
        setAuthUser(data);
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }finally{
        setLoading(false);
    }
  };
  return {loading, loginUser};
};

export default useLogin;

function handleInput({username, password}){
    if(!username || !password){
        toast.error("Please fill the fields!");
        return false;
    }
    if(password.length<6){
        toast.error("Password is too short!");
        return false;
    }
    return true;
};