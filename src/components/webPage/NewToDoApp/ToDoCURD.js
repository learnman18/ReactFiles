import React, { useEffect, useState } from "react";

const MyToDoList = () => {

    const [inputData , setinputData] = useState();
    const [AddItem , setAddItem] = useState([]);

    const ClickToAddItem = () => {
        !inputData ? alert("Please enter something") : setAddItem([...AddItem , inputData]);
        setinputData(""); // just to empty the input filed once the item is added.
    }

    const ClickToRemoveItem = (indx) => {
        const  x = AddItem.filter((curVal , i)=>{
            return indx !== i;
        })
        setAddItem(x);
    }

    useEffect(()=>{
        localStorage.setItem("allItems" , JSON.stringify(AddItem))
    },[AddItem]);

    const editItem = (indx) => {
        console.log("edit");
    }


    return(
        <React.Fragment>
            <div className="pb-5" style={{width:"20%"}}>
                <div className="border border-dark p-2">
                    <h5>TO DO APP</h5>
                    <div className="d-flex align-items-center border border-dark">                    
                        <input type="text" className="form-control fixBrdr" value={inputData} onChange={(e)=>
                            {  
                            console.log(e.target.value);
                            setinputData(e.target.value)
                            }
                        }/>
                        <button className="bg-transparent fixBrdr" onClick={ClickToAddItem}>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>

                    {
                        AddItem.map((curVal , indx)=>{
                            return (
                            <div key={indx} id={indx} className="d-flex align-items-center justify-content-between my-2 bg-lavender text-dark">
                                <p className="my-2">{curVal}</p>
                                <div>
                                    <button className="bg-transparent fixBrdr">
                                        <i className="fa-solid fa-edit" onClick={()=>editItem(indx)}></i>
                                    </button>
                                    <button className="bg-transparent fixBrdr" onClick={()=>ClickToRemoveItem(indx)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default MyToDoList;