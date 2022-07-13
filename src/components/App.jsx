import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Super from "./SuperHeader";
import MainContent from "./MainContent";
import Description from "./Description";
import Landing from "./Landing";
import Billboard from "./Billboard";
import MoreHomes from "./MoreHomes";
import Box from "./Box";

function App() {
    return (
        <>
        <div>
            <Header />
        </div>
        <Billboard />
        <MoreHomes />
        <Landing />
        <Footer />
        </>
    );
}

export default App;