import Header from "@/components/layout/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "@/components/layout/Footer.jsx";

function Layout() {
  return (
      <div className="flex min-h-screen w-full flex-col">
          <Header/>
          <Outlet/>
          <Footer/>
      </div>
  )
}

export default Layout