import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
import Error from "../componet/eroorpagse/Error";
import About from "../pages/About";
import Pavrite from "../pages/Pavrite";
import PhoneDitels from "../pages/PhoneDitels";
import Cart from "../pages/Card";



 export const router = createBrowserRouter([
         {
            path:"/",
            Component:Root, 
            errorElement:<Error></Error> ,
            children:[
                {
                    path:'/' ,
                    loader:()=>fetch("data.json"),
                    Component:Home ,
                },
                {
                  path:"/about" ,
                  Component:About
                },
                {
                  path:'/pavrite',
                  Component:Pavrite
                },
                {
                 path:'/phoneDitels',
                 Component:PhoneDitels
                },
                {
                    path:'/card' ,
                    Component:Cart
                }

            ]
         }
])