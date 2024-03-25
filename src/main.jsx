
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignIn } from '../src/components/User/sighin.jsx';
import { SignUp } from '../src/components/User/sighnup.jsx';
import { CreateMeeting } from '../src/components/formMetting.jsx'
import { Connect } from './components/Manager/connect.jsx'
import { Nav } from './components/nav.jsx';
import { Admin } from './components/Manager/admin.jsx';
import { Meet } from './components/Manager/ordersManager.jsx'
import { Customers } from './components/Manager/customersBusiness.jsx'
import { getServices } from './components/Manager/Services.jsx'
import { about } from './components/Manager/aboutBusniess.jsx'
import { ManagerContext } from './context/manager.context'
import { UserContext } from './context/user.context'
import { Add } from './components/Manager/addMeeting.jsx'


const manager = [false]
const user = [""]

const router = createBrowserRouter([
  {
    path: "",
    Component: Nav,
    children: [
      {
        path: "/",
        Component: App,
      },
      {
        path: 'sighin',
        Component: SignIn,
      },
      {
        path: 'signup',
        Component: SignUp,
      },
      {
        path: 'formMetting',
        Component: CreateMeeting,
      },

    ],
    errorElement: <p>Oops :( Page not found...</p>,
  },
  {
    path: 'ConnectManager',
    Component: Connect,
  },
  {
    path: 'admin',
    Component: Admin,
  },
  {
    path: 'ordersManager',
    Component: Meet,
  },
  {
    path: 'customersBusiness',
    Component: Customers,
  },
  {
    path: 'Services',
    Component: getServices,
  },
  {
    path: 'aboutAs',
    Component: about,
  },
  {
    path: 'addMetting',
    Component: Add,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ManagerContext.Provider value={manager}>
      <UserContext.Provider value={user}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </ManagerContext.Provider>
  </React.StrictMode>
);



