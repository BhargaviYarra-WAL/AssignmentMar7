import { useState } from "react";
import { useContext } from "react";
import ForumContext from "./ForumContext";
const ForumForm =()=>{
   const [user , setUser] = useState("");
   const [topic , setTopic] = useState("");
   const {state,dispatch}= useContext(ForumContext);
    return(
        <div className="ForumForm">
            <h2>Forum Registration</h2>
            <textarea name ="topic" placeholder="Enter Topic" onInput={(event)=>{setTopic(event.target.value)}}></textarea><br/>
            <select name ="user" onChange ={(event)=>{setUser(event.target.value)}}>
                <option value ="User1">User1</option>
                <option value="User2">User2</option>
                <option value="User3">User3</option>
            </select><br/>
            <button className="btn1" onClick ={()=>{dispatch({type:"add",val1:user,val2:topic,val3: new Date().toGMTString()})}}>Add </button>
            <button className="btn1" onClick={()=>dispatch({type:"delete5mins"})}>Delete5mins</button>
           </div>
    )
}
export default ForumForm;