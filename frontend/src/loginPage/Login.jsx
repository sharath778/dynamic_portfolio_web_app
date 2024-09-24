import {React, useState} from 'react'
import useLogin from '../Hooks/useLogin.js';

const Login = () => {
    const [data, setData] = useState({
        username:'',
        password:''
    });
    const {loading, loginUser} = useLogin();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await loginUser(data);
    }
  return (
    <div className="h-[80vh] w-[100vw] flex justify-center">
        <form className="self-center" onSubmit={handleSubmit}>
            <div className='flex  flex-col h-[200px] w-[300px] border-solid border-white border-2 rounded-md justify-around'>
                <label className="self-center w-[30vh] input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Username" 
                    value={data.username} onChange={(e)=>setData({...data, username:e.target.value})}/>
                </label>
                <label className="self-center w-[30vh] input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd" />
                    </svg>
                    <input type="password" placeholder='Password' className="grow" 
                    value={data.password} onChange={(e)=>setData({...data, password:e.target.value})} />
                </label>
                <div className='flex justify-center'>
                    <button type = "submit" className=" btn btn-info">
                        Login
                    </button>
                </div>
            </div>
        </form>
    </div>
    
  )
}

export default Login;