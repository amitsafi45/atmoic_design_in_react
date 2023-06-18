import React from "react";
import { HomeTemplate } from '../UI/templates/HomeTemplate'
import Home from "../UI/pages/Home";
import { LoginForm } from "../UI/organisms/LoginForm";
import About from "../UI/pages/About";
import WelcomePage from "../UI/pages/WelcomePage";

const UserRoute = [
  {
    path: "/",
    element: <HomeTemplate />,
    children: [
      {
        path: '',
        element: <WelcomePage />

      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'login',
        element: <LoginForm />
      },
      {
        path: 'about',
        element: <About />
      }


    ]
  },
];

export default UserRoute;
