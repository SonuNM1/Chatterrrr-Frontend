import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material"; // importing CssBaseline from Material-UI to provide a consistent baseline 
import { HelmetProvider } from "react-helmet-async"; // importing HelmetProvider for managing changes to the document head 
import { Provider } from "react-redux"; // Importing Provider from react-redux to connect the Redux store with the 
import store from "./redux/store.js"; // importing redux store 

// Rendering the React application into the DOM 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

  {/* Connecting the Redux store to the React application */}

    <Provider store={store}>

    {/* Wrapping the application with HelmetProvider for managing the document head */}

      <HelmetProvider>
        <CssBaseline />
        <div onContextMenu={(e) => e.preventDefault()}>
          <App />
        </div>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
