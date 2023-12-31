import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import BlogPage from "./Pages/Blog/BlogPage";
import Lectures from "./Pages/Lectures/Lectures";
import Contact from "./Pages/Contact/Contact";
import BlogPost from "./Components/Blog/BlogPost/BlogPost";

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
      path:'/blogs',
      element:<BlogPage/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/blogs/:postId',
      element:<BlogPost/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
