import {React, useState} from 'react'
import useDetails from '../Hooks/useDetails';
const DetailsForm = () => {
    const [details, setDetails] = useState({
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
    const {loading, postDetails} = useDetails();
    const handleSubmit=(e)=>{
        e.preventDefault();
        postDetails(details);
    }
  return (
    <div className="overflow-auto relative top-20">
        <div className="relavtive flex flex-col justify-center  overflow-hidden">
            <div className="w-full p-6 m-auto rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-gray-700">Details</h1>
                <form className="space-y-4 overflow-auto " onSubmit={handleSubmit}>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Full Name" className="w-full input input-bordered" 
                        value={details.name} onChange={(e)=>{setDetails({...details,name:e.target.value})}}/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Title</span>
                        </label>
                        <input type="text" placeholder="Title" className="w-full input input-bordered" 
                        value={details.title} onChange={(e)=>{setDetails({...details,title:e.target.value})}}/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Mobile Number</span>
                        </label>
                        <input type="text" placeholder="Mobile Number" className="w-full input input-bordered" 
                        value={details.mobileNumber} onChange={(e)=>{setDetails({...details,mobileNumber:e.target.value})}}/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email Id</span>
                        </label>
                        <input type="email" placeholder="E-mail" className="w-full input input-bordered" 
                        value={details.email} onChange={(e)=>{setDetails({...details,email:e.target.value})}}/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Address</span>
                        </label>
                        <input type="email" placeholder="Address" className="w-full input input-bordered" 
                        value={details.address} onChange={(e)=>{setDetails({...details,address:e.target.value})}}/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Github Link</span>
                        </label>
                        <input type="text" placeholder="URI" className="w-full input input-bordered" 
                        value={details.github} onChange={(e)=>{setDetails({...details,github:e.target.value})}}/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">LinkedIn </span>
                        </label>
                        <input type="text" placeholder="URI" className="w-full input input-bordered" 
                        value={details.linkedIn} onChange={(e)=>{setDetails({...details,linkedIn:e.target.value})}}/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Summary </span>
                        </label>
                        <textarea  placeholder="summary" className="h-20 w-full input input-bordered" 
                        value={details.summary} onChange={(e)=>{setDetails({...details,summary:e.target.value})}}/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Technical Skills </span>
                        </label>
                        <input type="text" placeholder="Enter skills(seperated by ',' symbol)" className="w-full input input-bordered" 
                        value={details.techSkills} onChange={(e)=>{setDetails({...details,techSkills:e.target.value})}}/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Soft Skills </span>
                        </label>
                        <input type="text" placeholder="Enter skills(seperated by ',' symbol)" className="w-full input input-bordered" 
                        value={details.softSkills} onChange={(e)=>{setDetails({...details,softSkills:e.target.value})}}/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Languages </span>
                        </label>
                        <input type="text" placeholder="Enter Languages(seperated by ',' symbol)" className="w-full input input-bordered" 
                        value={details.languages} onChange={(e)=>{setDetails({...details,languages:e.target.value})}}/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Certifications </span>
                        </label>
                        <input type="text" placeholder="Enter certificate names(seperated by ',' symbol)" className="w-full input input-bordered" 
                        value={details.certifications} onChange={(e)=>{setDetails({...details,certifications:e.target.value})}}/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-block">Update</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default DetailsForm