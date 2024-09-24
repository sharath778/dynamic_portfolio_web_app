import {useState} from 'react';
import toast from 'react-hot-toast';

const useDetails = () => {
    const [loading, setLoading] = useState(false);
    const postDetails = async (
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
        }
    )=>{
        if(!handleInput({name,
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
        })){
            return;
        }
        
        try{
            setLoading(true);
            const res = await fetch("/api/dataInput",{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({name,
                    title,
                    mobileNumber,
                    email,
                    github,
                    linkedIn,
                    summary,
                    techSkills:techSkills.split(","),
                    softSkills:softSkills.split(","),
                    languages:languages.split(","),
                    certifications:certifications.split(",")
                    })
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            toast.success("Details submitted successfully!")
            localStorage.setItem("data","true");
        }catch(error){
            toast.error(error.message);
        }finally{
            setLoading(false);
        }

    };
    return {loading, postDetails};
}

export default useDetails;

function handleInput({name,
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
    }){
    if(!name||
        !title||
        !mobileNumber||
        !email||
        !github||
        !linkedIn||
        !summary||
        !techSkills||
        !softSkills||
        !languages||
        !certifications
        ){
            toast.error("Please fill all the fields!");
            return false;
        }
        return true;
}