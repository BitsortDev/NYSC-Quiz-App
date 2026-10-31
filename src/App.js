
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Home from "./pages/home";
import Navbar from "./components/navBars";
import About from "./pages/about";
import Quiz from "./pages/quiz";
import Review from "./pages/review";
import Process from "./pages/process";

function AppLayout() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/quiz", element: <Quiz /> },
      { path: "/review", element: <Review /> },
      { path: "/process", element: <Process /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
