import { Outlet, useLocation, useNavigation } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"

function Home() {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location) // it gives the location of url
  return (
    <>
       <div className="container mx-auto">
          <Header></Header>
          {
            navigation.state === "loading"? 
            <p className="text-2xl text-center">Loading...</p>:
            <Outlet></Outlet>
          }
            <Footer></Footer>
       </div>

    </>
  )
}

export default Home