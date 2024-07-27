// importing necessary modules and components from React and other libraries

import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // For routing
import ProtectRoute from "./components/auth/ProtectRoute"; // for protected route
import { LayoutLoader } from "./components/layout/Loaders"; // loader component
import axios from "axios"; // for making HTTP requests
import { server } from "./constants/config"; // server configuration
import { useDispatch, useSelector } from "react-redux"; // redux hooks
import { userExists, userNotExists } from "./redux/reducers/auth"; // redux actions
import { Toaster } from "react-hot-toast"; // for toast notifications
import { SocketProvider } from "./socket"; // for providing socket context

// lazy loading components for code splitting and performance optimization

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));

// lazy loading admin components

const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const UserManagement = lazy(() => import("./pages/admin/UserManagement"));
const ChatManagement = lazy(() => import("./pages/admin/ChatManagement"));
const MessagesManagement = lazy(() =>
  import("./pages/admin/MessageManagement")
);

const App = () => {
  const { user, loader } = useSelector((state) => state.auth); // getting user and loader state from redux state

  const dispatch = useDispatch(); // initializing Redux dispatch function

  // useEffect hook to check if the user is logged in when the component mounts

  useEffect(() => {
    axios
      .get(`${server}/api/v1/user/me`, { withCredentials: true }) // API call to get user info
      .then(({ data }) => dispatch(userExists(data.user))) // If user exists, dispatch userExists action
      .catch((err) => dispatch(userNotExists())); // If error, dispatch userNotExist
  }, [dispatch]); // dependency array, effect runs only when dispatch changes

  return loader ? (
    <LayoutLoader /> // If loader is true, show LayoutLoader
  ) : (
    // Otherwise, render the app with routes

    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        {/*Routes for different components*/}

        <Routes>
          <Route
            element={
              // ProtectRoute for authenticated routes, wrapped with SocketProvider -> SocketProvider initializes and provides a WebSocket connection : ProtectRoute ensures that only authenticated users can access certain routes.

              <SocketProvider>
                <ProtectRoute user={user} />
              </SocketProvider>
            }
          >
            {/*Nested routes for protected paths*/}

            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>

          {/*Route for login page, protected so only accessible if user is not logged in*/}

          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />

          {/*Routes for admin pages*/}

          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/chats" element={<ChatManagement />} />
          <Route path="/admin/messages" element={<MessagesManagement />} />

          {/*Route for 404 Not Found Page*/}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {/*Toaster for showing toast notifications */}

      <Toaster position="bottom-center" />
    </BrowserRouter>
  );
};

export default App;

/*
This code sets up a React application with routing, lazy loading for better performance, protected routes, Redux for state management, Axios for HTTP requests, and a socket provider for real-time features. 
*/

/*                                            LAZY LOADING 

it means loading resources (like images, scripts or components) only when they are required, rather than at the initial page load. This helps improve performance and reduces the initial load time of the application. 

Component Splitting - It splits our application into multiple components, which can be loaded on demand. 

        For example, a large component that is not required immediately can be loaded only when the user navigates to the part of the application where it is needed. 

*/

/*                                          REDUX (dispatch and action)

Redux is a state management library. It helps manage the state (data) of our application in predictable way. 

State - the data or state of our application, for example, the current logged-in user, a list of chat messages, etc. 

Action - an action is an object that describes what happened in our application. For example, when a user logs in, an action might look like this: 

            { type: 'USER_LOGGED_IN', payload: { user: { name: 'John Doe', id: 1 } } }

Reducer - a function that takes the current state and an action, and returns a new state based on the action. 

  For example, when the 'USER_LOGGED_IN' action is dispatched, the reducer updates the state with the new user data. 

Dispatch - a function that sends an action to the Redux store. when an action is dispatched, the store runs the reducers to calculate the new state. 


*/
