import { useState } from "react"

const useInputState = (defaulteValue= "")=>{
    const [value, setValue] = useState(defaulteValue);
    const onChange = e =>{
        setValue(e.target.value);
    }
    return {
        value, 
        onChange
    }
}
export default useInputState;