import React from "react";
import Layout from "./Compontent/Layout/layout";
import "./style/main/main.scss";
import Linkz from "./Routes/route";

const App = () => {
  return (
    <>
      <Layout>
        <Linkz />
      </Layout>
    </>
  );
};

export default App;
