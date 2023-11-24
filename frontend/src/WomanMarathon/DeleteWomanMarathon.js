import React, {useState} from "react";
import { deleteOne } from "../services/womanMarathon";

const DeleteWomanMarathon = ({id}) => {
    const [error, setError] = useState(null)

    const handleDelete = async () => {
        try{
            await deleteOne(id);
            console.log("Participant Deleted Successfuly!!");
        }catch (error){
            setError(error.message);
        }
        window.location.reload();
    }

    return(
        <div>
            <button
                onClick={handleDelete}
                type="button"
                className="btn btn-danger"
            >
                Delete
            </button>
        </div>
    )
}


export default DeleteWomanMarathon;