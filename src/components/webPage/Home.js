import React from "react";
import Common from "./Common";

const Home = () => {

    return(
        <>
            <Common
                title="This is Home page"
                desc="We are team of talented designers making websites"
                buttonName="Get Started"
                btnLink = "/services"
            ></Common>
        </>
    )
}

export default Home;