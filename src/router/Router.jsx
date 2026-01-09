import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
import Error from "../componet/eroorpagse/Error";
import About from "../pages/About";
import Pavrite from "../pages/Pavrite";
import PhoneDitels from "../pages/PhoneDitels";
import Cart from "../pages/Card";
import Firebase from "../firebase/Firebase";
 



 export const router = createBrowserRouter([
         {
            path:"/",
            Component:Root, 
            errorElement:<Error></Error> ,
            children:[
                {
                    path:'/' ,
                    loader:()=>fetch("data.json"),
                    hydrateFallbackElement: <>
                              <span className="loading loading-spinner loading-xs"></span>
                            <span className="loading loading-spinner loading-sm"></span>
                            <span className="loading loading-spinner loading-md"></span>
                            <span className="loading loading-spinner loading-lg"></span>
                            <span className="loading loading-spinner loading-xl"></span> 
                    </> ,
                    Component:Home ,
                },
                {
                  path:"/about" ,
                  Component:About
                },
                {
                  path:'/pavrite',
                   loader:()=>fetch("data.json"),
                  Component:Pavrite
                },
                {
                 path:'/phoneDitels/:id',
                  loader:()=>fetch("data.json"),
                 Component:PhoneDitels
                },
                {
                    path:'/card' ,
                    Component:Cart
                },
                {
                  path:"/firebase",
                  Component:Firebase
                }

            ]
         }
])