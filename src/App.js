import React from "react";
import "antd/dist/reset.css";
import { blue } from "@ant-design/colors";
import { useRoutes } from "react-router-dom";
import { GlobalContext } from "./providers/GlobalProvider";


const App = () => {
  console.log(blue);
  console.log(blue.primary);
  const context = React.useContext(GlobalContext);

  const routes = useRoutes(context.module);
  return (
    // <div>
    //   <Button type="primary">Button</Button>
    // </div>
    <>
    {routes}
    </>
  );
};

export default App;
