import React from 'react';
import './App.css';
import Root from "./routes/root";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/error/error-page";
import {UserList} from "./pages/user-list/user-list.component";
import {UserDetails} from "./pages/details/user-details.component";
import {FormCreateUser} from "./pages/form/form-user.component";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    path: "/listing",
                    element: <UserList/>,
                    errorElement: <ErrorPage/>,

                },
                {
                    path: "/user/:userId",
                    element: <UserDetails/>,
                },
                {
                  path: "/create-user",
                  element: <FormCreateUser />
                },
            ]
        },
    ]);

function App() {
    return (
        <div className='router'>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
