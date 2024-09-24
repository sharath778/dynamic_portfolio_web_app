import {useState} from 'react'
import { toast } from 'react-hot-toast';
const useUpdateDetails = () => {
  const [loading, setLoading]=useState(false);
  const updateDetails = async (
    {name,
    title,
    mobileNumber,
    email,
    github,
    linkedIn,
    summary,
    techSkills,
    softSkills,
    languages,
    certifications
    })=>{
    try{
        setLoading(true);
        const data = await fetch("/api/update/user",{
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,
                title,
                mobileNumber,
                email,
                github,
                linkedIn,
                summary,
                techSkills: techSkills ? techSkills.split(",") : [],
                softSkills: softSkills ? softSkills.split(",") : [],
                languages: languages ? languages.split(",") : [], 
                certifications: certifications ? certifications.split(",") : []
                }),
        });
        if (!data.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to update details");
          }
    
          const succData = await data.json(); // Get the data from the response
          toast.success("Details updated successfully!");
          return succData;

    }catch(error){
      console.error("Error updating details:", error.message);
      toast.error(error.message);
    }finally{
        setLoading(false);
    }
  }
  return { loading, updateDetails };
}

export default useUpdateDetails;