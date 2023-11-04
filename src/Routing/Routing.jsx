import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Register/LogIn/Login";
import SingUp from "../Register/SingUp/SingUp";
import DashBoardLayout from "../Layout/DashBoardLayout";
import DashBoardHome from "../DashBoard/DashBoardHome/DashBoardHome";
import AccountSetting from "../DashBoard/AccountSetting/AccountSetting";
import AddArticle from "../DashBoard/AddArticle/AddArticle";
import ManageArticle from "../DashBoard/ManageArticle/ManageArticle";
import ManageUser from "../DashBoard/ManageUser/ManageUser";
import AllNews from "../News/AllNews/AllNews";
import NewDetails from "../News/NewDetails/NewDetails";
import Journal from "../News/Journal/Journal";
import JustArticle from "../News/JustArticle/JustArticle";
import Treanding from "../News/Treanding/Treanding";
import Studies from "../SubCategory/Studies/Studies";
import SubCardDetails from "../SubCategory/SubCardDetails/SubCardDetails";
import NoDataPage from "../SubCategory/NoDataPage/NoDataPage";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/all",
                element: <AllNews></AllNews>
            },
            {
                path: "/journal",
                element: <Journal></Journal>
            },
            {
                path: "/justarticle",
                element: <JustArticle></JustArticle>
            },
            {
                path: "/treanding",
                element: <Treanding></Treanding>
            },
            {
                path: "/newsdetails/:id",
                element: <NewDetails></NewDetails>
            },
            {
                path: "/studies",
                element: <Studies></Studies>
            },
            {
                path: "/subcarddetails",
                element: <SubCardDetails></SubCardDetails>
            },
            {
                path: "/nodata",
                element: <NoDataPage></NoDataPage>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/singup",
                element:<SingUp></SingUp>
            }
        ]
    },

    {
        path:'/dashboard',
        element:<DashBoardLayout></DashBoardLayout>,
        children:[
            {
                path:'/dashboard',
                element:<DashBoardHome></DashBoardHome>
            },
            {
                path:'/dashboard/accountsetting',
                element:<AccountSetting></AccountSetting>
            },
            {
                path:'/dashboard/addarticle',
                element:<AddArticle></AddArticle>
            },
            {
                path:'/dashboard/managearticle',
                element:<ManageArticle></ManageArticle>
            },
            {
                path:'/dashboard/manageuser',
                element:<ManageUser></ManageUser>
            },
        ]
    }
    
]);