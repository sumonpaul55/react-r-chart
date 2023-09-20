import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"

function Home() {
  return (
    <>
       <div className="container mx-auto">
        <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
       </div>

    </>
  )
}

export default Home