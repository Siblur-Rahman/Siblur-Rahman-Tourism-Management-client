import React from 'react'
import ReactDOM from 'react-dom/client'
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
      loader:({params}) => fetch(`http://localhost:5000/TouristsSpot/${params.id}`)
    },
     { path: "/mylist/:email",
      element: <MyList></MyList>,
      loader:({params}) => fetch(`http://localhost:5000/TouristsSpot/${params.email}`)
    },
     { path: "/login",
      element: <Login></Login>,
    },
     { path: "/updatetouristsspot/:id",
      element: <UpdateTouristsSpot></UpdateTouristsSpot>,
      loader:({params}) => fetch(`http://localhost:5000/TouristsSpot/${params.id}`)
    },
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
