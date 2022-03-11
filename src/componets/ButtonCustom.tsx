import React, {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

/**
 * Function that creates the button for the
 * @param args
 * @constructor
 */
function ButtonCustom(args: any){

    const [openModal, setOpenModal] = useState(false);

    const deleteHandler = () =>{
        setOpenModal(true);
    }

    return(<div className={"card"}>
        <h2>{args.textMsg}</h2>
        <div className={"actions"}>
            <button className={"btn"} onClick={deleteHandler}>Delete</button>
        </div>
        {openModal && <Modal/>}
        {openModal && <Backdrop/>}
    </div>);

}

export default ButtonCustom;