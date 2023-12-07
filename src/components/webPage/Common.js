import React from "react";
import { Link } from "react-router-dom";

const Common = (props) => {
    return(
        <>
            <div>
                <div>
                    <h1>{props.title}</h1>
                    <Link className="btn btn-primary" to={props.btnLink}>{props.buttonName}</Link>
                </div>
            </div>
        </>
    )
}

export default Common;