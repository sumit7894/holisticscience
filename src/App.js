import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About Us/About";
import Lectures from "./Pages/Lectures/Lectures";
import Contact from "./Pages/Contact/Contact";

function App() {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
    },
    {
      path:'/lectures',
      element:<Lectures/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/contact',
      element:<Contact/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
