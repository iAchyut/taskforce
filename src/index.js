import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {  ConfigProvider } from "antd";
import { blue } from "@ant-design/colors";
import GlobalProvider from "./providers/GlobalProvider";
import module from "./module/module";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
let moduleList = module();
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: blue.primary,
        },
      }}
    >
      <GlobalProvider
      module={moduleList}
      >
        <Router>
      <App />
      </Router>
      </GlobalProvider>
    </ConfigProvider>
  </React.StrictMode>
);
