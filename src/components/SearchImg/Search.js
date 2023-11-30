import React, { useState } from "react";
import SearchResult from "./SearchResult";

const SearchImg = () =>{

    const [img , setImg] = useState("");

    const InputEvnt = (event) => {
        // console.log(event.target.value);
        setImg(event.target.value);
    }

    return(
        <React.Fragment>
            <input placeholder="search something" value={img} onChange={InputEvnt}/>
            <div>
                <SearchResult searchedImg={img}></SearchResult>
            </div>
        </React.Fragment>
    )
}

export default SearchImg