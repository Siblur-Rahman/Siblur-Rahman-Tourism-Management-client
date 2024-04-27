import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root.jsx';
// import Register from './pages/Register.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import AddTouristsSpot from './pages/AddTouristsSpot.jsx';
import AllTouristsSpot from './pages/AllTouristsSpot';
import ViewDetails from './pages/ViewDetails';
import MyList from './pages/MyList.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register';
import UpdateTouristsSpot from './pages/UpdateTouristsSpot.jsx';
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
      element: <ViewDetails></ViewDetails>,
      // loader:() => fetch('http://localhost:5000/TouristsSpot')
    },
     { path: "/mylist",
      element: <MyList></MyList>,
    },
     { path: "/login",
      element: <Login></Login>,
    },
     { path: "/register",
      element: <Register></Register>,
    },
     { path: "/updatetouristsspot",
      element: <UpdateTouristsSpot></UpdateTouristsSpot>,
    },
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
