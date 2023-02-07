import React, { Fragment } from "react";
import Nav_Bar from "../nav/navBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () =>{
    return(
        <Fragment>
            <Nav_Bar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Fragment>
    )
}

export default Layout;