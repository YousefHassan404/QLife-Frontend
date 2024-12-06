import QueryProvider from "../Utils/Query/QueryProvider.jsx";
import { UserProvider } from "../Utils/Providers/Context/UserContext.jsx";
import { SideProvider } from "../Utils/Providers/Context/SideContext.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Work from "./Pages/Work.jsx";
import Edit from "./Pages/Edit.jsx";
import Error from "./Pages/Error.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Delete from "./Pages/delete.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/work", element: <Work /> },
  { path: "/SignIn", element: <SignIn /> },
  { path: "/SignUp", element: <SignUp /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/profile/edit", element: <Edit /> },
  { path: "/profile/delete", element: <Delete /> },

  { path: "*", element: <Error /> },
]);

createRoot(document.getElementById("root")).render(
    <QueryProvider>
      <StrictMode>
        <UserProvider>
          <SideProvider>
            <RouterProvider router={router} />
          </SideProvider>
        </UserProvider>
      </StrictMode>
    </QueryProvider>
);
