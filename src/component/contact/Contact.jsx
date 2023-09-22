// import FormInputState from "./FormInputState";
import Reusable from "./Reusable";

function Contact() {
  const handleSubmit = (data)=>{
    console.log("sign Up data", data)
}
const handleEmail = (data)=>{
 console.log("Login Data",data)
}
  return (
   <>
    <div className="p-4 shadow m-5 bg-black text-white">
    {/* <Refform></Refform> */}
    {/* <FormInputState></FormInputState> */}
      <div className="p-3">
      <Reusable formTitle="Sign Up" handleSubmit={handleSubmit}>
       <div>
       <h2 className="text-2xl">Sign Up</h2>
        <p>Please sign up for go forword</p>
       </div>
      </Reusable>
      <Reusable formTitle="Login" handleSubmit={handleEmail}>
        <div>
          <h2 className="text-2xl">Login</h2>
          <p>Please Login for go</p>
        </div>
      </Reusable>
      <Reusable formTitle="Log out" submitBtnText="Update"></Reusable>
      </div>
    </div>
    
    </>
  )
}

export default Contact