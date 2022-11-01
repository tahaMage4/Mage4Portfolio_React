import * as React from "react";
import Footer from "../Footer/footer";
// import "../../styles.css";
import Navigation from "../Navbar/navbar";
// import SEO from "../Seo/seo";
// import About from "../About/about";

const Layout = (props) => {
  return (
    <>
      {/* <SEO {...props} /> */}
      <Navigation />

      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
