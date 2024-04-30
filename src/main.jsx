import React from 'react'
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import AddTouristsSpot from './pages/AddTouristsSpot.jsx';
import AllTouristsSpot from './pages/AllTouristsSpot';
import ViewDetails from './pages/ViewDetails';
import MyList from './pages/MyList.jsx';
import Login from './pages/Login.jsx';
import UpdateTouristsSpot from './pages/UpdateTouristsSpot.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './pages/Users.jsx';
import PrivateRoute from './routes/PrivateRoute'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children:[
     { path: "/",
      element: <Home></Home>,
      loader: ()=> fetch('http://localhost:5000/TouristsSpot')
    },
     { path: "/addtouristsspot",
      element: <AddTouristsSpot></AddTouristsSpot>,
    },
     { path: "/alltouristsspot",
      element: <AllTouristsSpot></AllTouristsSpot>,
    },
     { path: "/viewdetails/:id",
      element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
      loader:({params}) => fetch(`http://localhost:5000/TouristsSpot/${params.id}`)
    },
     { path: "/mylist",
      element: <MyList></MyList>,
      loader:() => fetch(`http://localhost:5000/TouristsSpot`)
    },
    {
      path:'/register',
      element: <Register></Register>,
    },
     { path: "/login",
      element: <Login></Login>,
    },
     { path: "/users",
      element: <Users></Users>,
      loader:() => fetch(`http://localhost:5000/users`)

    },
     { path: "/updatetouristsspot/:id",
      element: <PrivateRoute><UpdateTouristsSpot></UpdateTouristsSpot></PrivateRoute>,
      loader:({params}) => fetch(`http://localhost:5000/TouristsSpot/${params.id}`)
    },
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
