import Dashboard from "../pages/Dashboard/dashboard";
import Layout from "../component/Layout/layout";
import LandingPage from "../pages/landingPage";
import { Navigate } from "react-router-dom";
const module = (access) => {
    return ([
        {
            path: '/',
            element: <LandingPage/> 
        },
        {
            path: "dashboard",
            element: <Layout />
        },
        {
            path: "*",
            element: <Navigate to="/" />
        }
    ])
}


export default module;