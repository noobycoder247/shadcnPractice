import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Dashboard from "@/pages/user/Dashboard.jsx";
import Layout from "@/components/layout/Layout.jsx";
import {Login} from "@/pages/user/Login.jsx";
import {Signup} from "@/pages/user/Signup.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Dashboard />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;