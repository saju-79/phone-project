import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
import Error from "../componet/eroorpagse/Error";


 export const router = createBrowserRouter([
         {
            path:"/",
            Component:Root, 
            errorElement:<Error></Error> ,
            children:[
                {
                    path:'/' ,
                    Component:Home ,
                }
            ]
         }
])