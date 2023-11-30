import React, { useState } from "react";

const SearchResult = (props) => {
    
    const [imageSearched , setImageSearched] = useState([]);
    const allImgs = "https://source.unsplash.com/random/300×300";

    // console.log(typeof(imageSearched));
    const x = setImageSearched(allImgs);
    console.log(typeof(x));


    return(
        <>
            <img style={{height:300,width:300,marginTop:50}} src={allImgs} alt="the searched one"></img>
        </>
    )
}

export default SearchResult;