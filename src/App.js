import React from "react";
import { Button } from "antd";
import "antd/dist/reset.css";
import { blue } from "@ant-design/colors";

const App = () => {
  console.log(blue);
  console.log(blue.primary);
  return (
    <div>
      <Button type="primary">Button</Button>
    </div>
  );
};

export default App;
