import { useLoaderData } from "react-router-dom"
import User from "./User"

function Users() {
    const users = useLoaderData()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-20 mt-10">
       {
        users.map((user) =>(
            <User user={user} key={user.id}></User>
        ))
       }
    </div>
  )
}

export default Users