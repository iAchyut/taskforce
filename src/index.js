import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {  ConfigProvider } from "antd";
import { blue } from "@ant-design/colors";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: blue.primary,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
