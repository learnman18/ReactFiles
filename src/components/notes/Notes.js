import React from "react";

const Notes = (props)=>{

    return(
        <>
            <div className="parentNotes">
                <p>{props.title}</p>
                <p style={{height:100}}>{props.content}</p>
                <button style={{width:150}} onClick={props.handleDelete}>Delete Notes</button>
            </div>
        </>
    )
}

export default Notes;