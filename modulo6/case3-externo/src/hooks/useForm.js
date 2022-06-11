import * as React from "react";


const useForm = (initialStates) => { 

    const [form , setForm] = React.useState(initialStates)

    const onChange = (e) => { 
        const name  = e.target.name
        const value  = e.target.value
        setForm({...form ,[name]:value})
    } 
    const clear =()=> { 
        setForm(initialStates)
    }
 return {form , onChange, clear};
};

export default useForm;
