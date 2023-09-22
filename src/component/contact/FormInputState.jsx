import useInputState from "../../shared/useInputState";

function FormInputState() {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    // const inputValue = useInputState("sumonpual");
    const inputState = useInputState("sumonpual");
    // console.log(inputState)
    // const {value, onChange} = inputValue;
    // console.log(inputState)
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input {...inputState} type="text" placeholder="Enter Your Name" />
            <br />
            <input type="submit" value="Submit" className="text-white px-3 py-2 bg-blue-400 mt-4"/>
        </form>
    </div>
  )
}

export default FormInputState