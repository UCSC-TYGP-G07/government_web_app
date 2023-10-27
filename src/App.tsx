import React from 'react';
import { MantineProvider } from "@mantine/core";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Index from "./pages/Index";
import Signin from "./pages/Signin";
import RequestIndex from "./pages/Requests/Index";
import theme from "./theme";
import Form from './pages/Requests/Viewform';
import VerifyImage from './pages/Requests/VerifyImage';
import VerifyApplication from './pages/Requests/Verifyapplication';
import RejectionForm from './pages/Requests/Rejectionform';
import IdentificationCard from './pages/Requests/IdentificationCard';
import Adduser from './pages/Requests/Adduser';
import Dashboard from './pages/Requests/dashboard';
import AuthProvider from "./services/AuthContextProvider";
import Profile from "./pages/Requests/Userprofile";


function App() {
  // const handleFormSubmit = (rejectionNote: string) => {
  //   // You can handle the form submission here, e.g., send the data to the server.
  //   console.log('Rejection Note:', rejectionNote);
  // };

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      {/* <RouterProvider router={router} /> */}
      <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </MantineProvider>

  );
 
}

/* Adding browser based routing */
const router = createBrowserRouter([
    {path: '/', element: <Index />},
    {path: '/signin', element: <Signin />},
    {path: '/requests', element: <RequestIndex />},
    {path: '/form', element: <Form />},
    {path: '/verifyimage', element: <VerifyImage />},
    {path: '/verifyapplication', element: <VerifyApplication />},
    {path: '/rejectionform', element: <RejectionForm />},
    {path: '/identificationcard', element: <IdentificationCard />},
    {path: '/adduser', element: <Adduser />},
    {path: '/dashboard', element: <Dashboard />},
    {path: '/profile', element: <Profile />}
]);

export default App;
