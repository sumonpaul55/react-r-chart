import { Link, useLoaderData } from "react-router-dom"
import PropTypes from "prop-types"
function UserDetail() {
    const userInfo = useLoaderData();
    const {name, website, company} = userInfo
  return (
   <div className="grid grid-cols-2 gap-5">
     <div className="font-bold border border-blue-700">
        <h1 className="text-3xl">{name}</h1>
        <Link >{website}</Link>
        <div className="p-3">
            <h3>{company.name}</h3>
            <h3>{company.catchPhrase}</h3>
        </div>
    </div>
    <div>
        <h3>image over here</h3>
    </div>
   </div>
  )
}
UserDetail.propTypes = {
    userInfo: PropTypes.object.isRequired
}
export default UserDetail