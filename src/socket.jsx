import { createContext, useMemo, useContext } from "react";
import io from "socket.io-client";
import { server } from "./constants/config";

const SocketContext = createContext();    // creating a context for the socket connection 

const getSocket = () => useContext(SocketContext);  // custom hook to use the SocketContext and get the socket instance 

// SocketProvider component to manage the socket connection and provide it to the rest of the application 

const SocketProvider = ({ children }) => {

  // useMemo hook to memoize the socket instance and only recreate it if the dependencies change -> useMemo ensures that the socket instance is created only once when the component mounts and not on every render 

  const socket = useMemo(() => io(server, { withCredentials: true }), []);

  // Providing the socket instance to all children components via the context

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketProvider, getSocket };
