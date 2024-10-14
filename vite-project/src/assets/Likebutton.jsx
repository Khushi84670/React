import { useState } from "react"
export default function Likebutton(){
    let [isLiked,setisLiked]= useState(false)
    let togglelike = () => {
        setisLiked(!isLiked);
     
    }
    return(
        <div>
            <p onClick={togglelike}>
            {
                isLiked? (<i className="fa-regular fa-heart" ></i>):
                ( <i className="fa-solid fa-heart"></i>)}
                    </p>
        </div>
    )
}