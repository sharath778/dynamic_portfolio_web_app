import { React,useState } from 'react'
import useSignup from '../Hooks/useSignup.js';

const SignUp = () => {
    const [inputData, setInputData] = useState({
        fullName:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:"male"
    });
    const {loading, signup} = useSignup();
    const handleSubmit= async (e)=>{
        e.preventDefault();
        await signup(inputData);
    };
  return (
    <div className="h-[80vh] w-[100vw] flex justify-center">
        <form className="self-center" onSubmit={handleSubmit}>
            <div className='flex  flex-col h-[400px] w-[300px] border-solid border-white border-2 rounded-md justify-around'>
                <label className="self-center w-[30vh] input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Full Name" 
                        value={inputData.fullName}
                        onChange={((e)=>setInputData({...inputData,fullName:e.target.value}))}/>
                </label>
                <label className="self-center w-[30vh] input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Username" 
                    value = {inputData.username}
                    onChange={((e)=>setInputData({...inputData,username:e.target.value}))}/>
                </label>
                <label className="self-center w-[30vh] input input-bordered flex items-center gap-2">
                    <input type="password" className="grow" placeholder="Password" 
                    value={inputData.password}
                    onChange={((e)=>setInputData({...inputData,password:e.target.value}))}/>
                </label>
                <label className="self-center w-[30vh] input input-bordered flex items-center gap-2">
                    <input type="password" placeholder='Confirm Password' className="grow" 
                    value={inputData.confirmPassword}
                    onChange={((e)=>setInputData({...inputData,confirmPassword:e.target.value}))} />
                </label>
                
                <label className="self-center w-[30vh] input input-bordered flex justify-between items-center gap-2">                
                    <div><span className='relative bottom-2'>Male:</span> 
                        <input type="radio" name="radio-2" className="radio radio-primary"
                        checked={inputData.gender==='male'} onChange={(e)=>setInputData({...inputData,gender:"male"})}/>
                    </div>
                    <div><span className='relative bottom-2 right-2'>Female:</span>
                    <input type="radio" name="radio-2" className="radio radio-primary" 
                    checked={inputData.gender==='female'} onChange={(e)=>setInputData({...inputData,gender:"female"})}/></div>
                </label>
                <div className='flex justify-center'>
                    <button type = "submit" className=" btn btn-info">
                        SignUp
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SignUp