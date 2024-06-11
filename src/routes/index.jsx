import {Suspense} from "react";
import {Icons} from "@/components/icons";
import {Routes, Route} from "react-router-dom";
import Layout from "@/components/layout/Layout.jsx";
import Dashboard from "@/pages/user/Dashboard.jsx";
import {Login} from "@/pages/user/Login.jsx";
import {Signup} from "@/pages/user/Signup.jsx";
import {AllProducts} from "@/pages/product/AllProducts.jsx";

const RoutesDirectory = () => {
    return (
        <Suspense
            fallback={
                <div className="container relative min-h-screen">
                    <Icons.spinner/>
                </div>
            }
        >
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<Dashboard/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='signup' element={<Signup/>}/>
                    <Route path='all-products' element={<AllProducts/>}/>
                </Route>
            </Routes>

        </Suspense>
    )
};
export default RoutesDirectory;