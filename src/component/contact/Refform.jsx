import { useEffect, useRef } from "react";

function Refform() {
    const nameRef = useRef("")
    const handleForm = e =>{
        e.preventDefault();
        // console.log(e.target.name.value)
        // console.log(nameRef) 
        console.log(nameRef.current)
    }
    useEffect(()=>{
        nameRef.current.focus();
    },[])
    return (
    <div className="py-5 bg-red-500">
        <form onSubmit={handleForm} className="p-5">
            <input ref={nameRef} className="m-3 outline-0 rounded-md p-2" type="text" name='name' placeholder='Name'/>
            <input type="email" defaultValue="email@gamil.com" />
            <input type="submit" value="submit"/>
        </form>
    </div>
  )
}

export default Refform