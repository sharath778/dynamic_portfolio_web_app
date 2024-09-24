import React, { useState,useEffect } from 'react'
import useGetData from '../Hooks/useGetData.js';
import useUpdateDetails from '../Hooks/useUpdateDetails.js';

const UpdateForm = () => {
    
    const [data, setData]=useState({
        name:"",
        title:"",
        mobileNumber:"",
        email:"",
        address:"",
        github:"",
        linkedIn:"",
        summary:"",
        techSkills:"",
        softSkills:"",
        languages:"",
        certifications:""
    });
    const {loading, getData}=useGetData();
    useEffect(() => {
        const fetchDataOnce = async () => {
          const userData = await getData();
          setData(userData);
        };
    
        fetchDataOnce();
      }, []); 
    const [popUp, setPopUp]= useState(true);
    const {updateDetails} = useUpdateDetails();
    const handleUpdates = (e)=>{
        e.preventDefault();
        setPopUp(false);
        updateDetails(data);
    }
    
    
  return (
    <div className="overflow-auto relative top-20">
        <div className="relavtive flex flex-col justify-center  overflow-hidden">
            <div className="w-full p-6 m-auto rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-gray-700">Details</h1>
                <form className="space-y-4 overflow-auto "  >
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Full Name</span>
                            {popUp?
                            <button type="submit" className='btn btn-primary opacity-[70%]' onClick={handleUpdates}>save</button>:
                            <button className='btn btn-primary opacity-[70%]' onClick={()=>setPopUp(true)} >edit</button>}
                        </label>
                        {popUp ? <input
                        type="text"
                        placeholder="Enter new data"
                        className="input input-bordered border-emerald-50 w-full"
                        value={data.name}
                        onChange={(e)=>setData({name:e.target.value})}/>:<div className="w-full input input-bordered flex"><span className='self-center'>{data.name}</span></div>}
                        
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Title</span>
                        </label>
                        {popUp ? <input
                        type="text"
                        placeholder="Enter new data"
                        className="input input-bordered border-emerald-50 w-full"
                        value={data.title}
                        onChange={(e)=>setData({...data,title:e.target.value})}/>:<div className="w-full input input-bordered flex"><span className='self-center'>{data.title}</span></div>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Mobile Number</span>
                        </label>
                        {popUp ? <input
                        type="text"
                        placeholder="Enter new data"
                        className="input input-bordered border-emerald-50 w-full"
                        value={data.mobileNumber}
                        onChange={(e)=>setData({...data,mobileNumber:e.target.value})}/>:<div className="w-full input input-bordered flex"><span className='self-center'>{data.mobileNumber}</span></div>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email Id</span>
                        </label>
                        {popUp ? <input
                        type="text"
                        placeholder="Enter new data"
                        className="input input-bordered border-emerald-50 w-full"
                        value={data.email}
                        onChange={(e)=>setData({...data,email:e.target.value})}/>:
                        <div className="w-full input input-bordered flex"><span className='self-center'>{data.email}</span></div>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Github Link</span>
                        </label>
                        {popUp ? 
                        <input
                        type="text"
                        placeholder="Enter new data"
                        className="input input-bordered border-emerald-50 w-full"
                        value={data.github}
                        onChange={(e)=>setData({...data,github:e.target.value})}/>:
                        <div className="w-full input input-bordered flex"><span className='self-center'>{data.github}</span></div>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">LinkedIn </span>
                            </label>
                        {popUp ? <input
                        type="text"
                        placeholder="Enter new data"
                        className="input input-bordered border-emerald-50 w-full"
                        value={data.linkedIn}
                        onChange={(e)=>setData({...data,linkedIn:e.target.value})}/>:<div className="w-full input input-bordered flex"><span className='self-center'>{data.linkedIn}</span></div>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Summary </span>
                        </label>
                        {popUp ? <input
                        type="text"
                        placeholder="Enter new data"
                        className="input input-bordered border-emerald-50 w-full"
                        value={data.summary}
                        onChange={(e)=>setData({...data,summary:e.target.value})}/>:<div className="w-full input input-bordered flex"><span className='self-center'>{data.summary}</span></div>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Technical Skills </span>
                        </label>
                        {popUp ? <input
                        type="text"
                        placeholder="Enter new data"
                        className="input input-bordered border-emerald-50 w-full"
                        value={data.techSkills}
                        onChange={(e)=>setData({...data,techSkills:e.target.value})}/>:<div className="w-full input input-bordered flex"><span className='self-center'>{data.techSkills}</span></div>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Soft Skills </span>
                        </label>
                        {popUp ? <input
                        type="text"
                        placeholder="Enter new data"
                        className="input input-bordered border-emerald-50 w-full"
                        value={data.softSkills}
                        onChange={(e)=>setData({...data,softSkills:e.target.value})}/>:<div className="w-full input input-bordered flex"><span className='self-center'>{data.softSkills}</span></div>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Languages </span>
                        </label>
                        {popUp ? <input
                        type="text"
                        placeholder="Enter new data"
                        className="input input-bordered border-emerald-50 w-full"
                        value={data.languages}
                        onChange={(e)=>setData({...data,languages:e.target.value})}/>:<div className="w-full input input-bordered flex"><span className='self-center'>{data.languages}</span></div>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Certifications </span>
                        </label>
                        {popUp ? <input
                        type="text"
                        placeholder="Enter new data"
                        className="input input-bordered border-emerald-50 w-full"
                        value={data.certifications}
                        onChange={(e)=>setData({...data,certifications:e.target.value})}/>:<div className="w-full input input-bordered flex"><span className='self-center'>{data.certifications}</span></div>}
                    </div>
                    
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default UpdateForm