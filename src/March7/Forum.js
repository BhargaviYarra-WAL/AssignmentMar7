import { useReducer } from "react";
import ForumForm from "./ForumForm";
import ForumList from "./ForumList";
import ForumContext from "./ForumContext";
import ForumReducer from "./Forum.reducer";
const Forum = ()=>{
    let initialValue = []
    if(localStorage.getItem("Deatails")){
        initialValue = JSON.parse(localStorage.getItem("Deatails"));
    }
    const [state,dispatch]=useReducer(ForumReducer,initialValue);
    const reducerVal={state,dispatch}
    return(
        <div>
            <ForumContext.Provider value ={reducerVal}>
            <ForumForm/>
            <ForumList/>
            </ForumContext.Provider>
        </div>
    )

}
export default Forum;