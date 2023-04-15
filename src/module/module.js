import Dashboard from "../pages/dashboard/dashboard";
import LandingPage from "../pages/landingPage";
const module = (access) => {
    return ([
        {
            path: '/',
            element: <LandingPage/> 
        },
        {
            path: "dashboard",
            element: <Dashboard />
        }
    ])
}


export default module;