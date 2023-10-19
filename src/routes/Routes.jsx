import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../MainLayOut/MainlayOut";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import AddProduct from "../components/AddProduct/AddProduct";
import MyCurt from "../components/MyCurt/MyCurt";
import Blogs from "../components/Blogs/Blogs";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Brand from "../components/Brand/Brand";
import BrandDetails from "../Pages/BrandDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainlayOut></MainlayOut>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addProduct',
            element:<AddProduct></AddProduct>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/myCurt',
            element:<MyCurt></MyCurt>
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        }
      ]
    },
    {
        path:'/brand',
        element:<Brand></Brand>
    },
    {
        path:'/brandDetails/:id',
        loader:()=> fetch('http://localhost:5000/product'),
        element:<BrandDetails></BrandDetails>
    }
  ]);

export default router;