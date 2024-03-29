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
import Private from "./Private";
import ViewDetails from "../Pages/ViewDetails";
import Update from "../Pages/Update";
import Support from "../components/Support/Support";
import Collection from "../components/Collection/Collection";

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
            element:<Private><AddProduct></AddProduct></Private>
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
            element:<Private><MyCurt></MyCurt></Private>,
            loader:()=> fetch('https://brand-shop-server-assignment-10-h06m6z73j.vercel.app/cart')
        },
        {
            path:'/collection',
            element:<Collection></Collection>
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'/contactUs',
            element:<Support></Support>
        }
      ]
    },
    {
        path:'/brand',
        element:<Brand></Brand>
    },
    {
        path:'/brandDetails/:id',
        loader:()=> fetch('https://brand-shop-server-assignment-10-h06m6z73j.vercel.app/product'),
        element:<Private><BrandDetails></BrandDetails></Private>
    },
    {
        path:'/viewDetails/:id',
        element:<Private><ViewDetails></ViewDetails></Private>,
        loader:()=> fetch('https://brand-shop-server-assignment-10-h06m6z73j.vercel.app/product')
    },
    {
        path:'/update/:id',
        element:<Private><Update></Update></Private>,
        loader:({params})=> fetch( `https://brand-shop-server-assignment-10-h06m6z73j.vercel.app/product/${params.id}`)
    }
  ]);

export default router;