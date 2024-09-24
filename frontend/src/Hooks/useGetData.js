import {useState} from 'react';

const useGetData = () => {
  const [loading, setLoading] = useState(false);
  const getData = async()=>{
    try{
        setLoading(true);
        const id = JSON.parse(localStorage.getItem("logged-user"))._id;
        const data = await fetch(`/api/getData/${id}`);
        const newData = await data.json();
        newData.techSkills=newData.techSkills.toString();
        newData.softSkills=newData.softSkills.toString();
        newData.certifications=newData.certifications.toString();
        newData.languages=newData.languages.toString();
        return newData;
    }catch(error){
        console.log("error in getting data for updateComponent!");
        return;
    }finally{
        setLoading(false);
    }
  };
  return {loading, getData};
};

export default useGetData