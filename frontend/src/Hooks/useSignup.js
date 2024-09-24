import {useState} from 'react'
import {toast} from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext.jsx';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();
  const signup = async ({fullName, username, password, confirmPassword, gender})=>{
    
    const success = handleInputs({fullName, username, password, confirmPassword, gender});
    if(!success) return;
    setLoading(true);
    try{
      const res = await fetch("/api/auth/signup",{
        method:'POST',
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify({fullName, username, password, confirmPassword, gender})
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("logged-user",JSON.stringify(data));
      localStorage.setItem("data","false");
      setAuthUser(data);
    }catch(error){
      console.log(error);
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
  };
  return {loading, signup};
};

export default useSignup;

function handleInputs({fullName, username, password, confirmPassword, gender}){
    if(!gender||!fullName || !username || !password || !confirmPassword){
        toast.error('Please fill in all fiels!');
        return false;
    }
    if(password!==confirmPassword){
      toast.error('Passwords are not matched!');
      return false;
    }
    if(password.length<6){
      toast.error('Password is too short!');
      return false;
    }
    return true;
}