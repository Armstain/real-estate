import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root.jsx";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import CardDetails from "../pages/CardDetails/CardDetails.jsx";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute.jsx";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import BrowseCards from "../pages/BrowseCards/BrowseCards.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";




const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root></Root>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/login",
                    element: <Login></Login>
                },
                {
                    path: "/allCards",
                    element: <PrivateRoute><BrowseCards></BrowseCards></PrivateRoute>,
                    loader: () => fetch('/data.json')

                },
                {
                    path: '/contact',
                    element: <Contact></Contact>
                },
                {
                    path: "/register",
                    element: <Register></Register>
                },
                {
                    path: "/Card/:id",
                    element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                    loader: () => fetch('/data.json')
                },
                {
                    path: '/updateProfile',
                    element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
                },
                {
                    path: '*',
                    element: <ErrorPage></ErrorPage>
                }

            ]
        }
    ]


)

export default router;