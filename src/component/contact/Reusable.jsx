import PropTypes from "prop-types"

function Reusable({ submitBtnText = "submit" , handleSubmit, children}) {
    const handleLocalSubmit = (e)=>{
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value
        }
        handleSubmit(formData)
    }
   
    return (
    <div className="mt-10">
        <h2 className="text-xl">
        {/* {formTitle} */}
        {children}
        </h2>
        <form onSubmit={handleLocalSubmit}>
            <input className="m-3 text-black" type="text" name="name" />
            <br />
            <input className="m-3 text-black" type="email" name="email" />
            <br />
            <input className="m-3 text-black" type="phone" name="phone" /><br />
            <input className="bg-indigo-300 text-white px-3 py-1" type="submit" value={submitBtnText} />
        </form>
    </div>
  )
}
Reusable.propTypes ={
    formTitle:PropTypes.string,
    submitBtnText: PropTypes.string,
    handleSubmit: PropTypes.func,
    children: PropTypes.element
}

export default Reusable