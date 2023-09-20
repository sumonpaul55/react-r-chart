import { Outlet } from "react-router-dom"

function Home() {
  return (
    <>
        <div>Home</div>
        <Outlet></Outlet>
    </>
  )
}

export default Home