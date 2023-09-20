import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom"
import PropTypes from "prop-types"
function UserDetail() {
    const navigate = useNavigate()
    const userInfo = useLoaderData();
    const {name, website, company} = userInfo
    const handleGoBack = ()=>{
        navigate(-1)
    }
    const {userId} = useParams();
    console.log(userId)
  return (
   <div className="grid grid-cols-2 gap-5">
     <div className="font-bold border border-blue-700 p-5">
        <h1 className="text-3xl">{name}</h1>
        <Link >{website}</Link>
        <div className="p-3">
            <h3>{company.name}</h3>
            <h3>{company.catchPhrase}</h3>
        </div>
         <button className="text-center w-full bg-blue-500 text-white p-1 rounded-full" onClick={handleGoBack}>Go Back</button>
    </div>
    <div>
        <h3>image over here</h3>
    </div>
   </div>
  )
}
UserDetail.propTypes = {
    userInfo: PropTypes.object
}
export default UserDetail