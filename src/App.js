import logo from "./logo.svg";
import "./App.css";
import { Button, Navbar, Theme } from "react-daisyui";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import News from "./Pages/News";
import Contacts from "./Pages/Contacts";
import MenuBar from "./MenuBar/MenuBar";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element:<Main></Main>, children:[
        {
          path: "/home", element:<Home/>,
        },
        {
          path: "/about", element:<About/>,
        },
        {
          path: "/contacts", element:<Contacts/>,
        },
        {
          path: "/news", 
          loader:()=>{
            return fetch('Sample-Report.json')
          } ,
          element:<News/>,
        },
      ]
    },
    
  ])
  return (
    <div>
      
     
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
