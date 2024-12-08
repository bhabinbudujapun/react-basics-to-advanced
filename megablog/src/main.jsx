import "./index.css";
import React from "react";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-redux";
import { AuthLayout, Login } from "./components/index.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AddPost from "./components/Pages/AddPost.jsx";
import AllPost from "./components/Pages/AllPost.jsx";
import EditPost from "./components/Pages/EditPost.jsx";
import Home from "./components/Pages/Home.jsx";
import Login from "./components/Pages/Login.jsx";
import Post from "./components/Pages/Post.jsx";
import Signup from "./components/Pages/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: (
          <AuthLayout authentication="false">
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/Signup",
        element: (
          <AuthLayout authentication="false">
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            {" "}
            <AllPost />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        ),
      },
      { path: "/post/:slug", element: <Post /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
