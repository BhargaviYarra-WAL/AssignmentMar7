const ForumReducer=(state,action)=>{
    if (action.type == "add"){
        let forumOb={
            user : action.val1,
            topic :action.val2,
            time :action.val3,
        }
        localStorage.setItem("Details",JSON.stringify([...state,forumOb]));
        return [...state,forumOb]
    }
    if(action.type=="deletetopic"){
        let newState = state.filter((val,index)=>{
            if(index==action.index){
                return false;
            }
            else{
                return true;
            }
        })
        localStorage.setItem("Details",JSON.stringify(newState))
        return newState;
    }
    if (action.type == "delete5mins") {
        let newState = state.filter((val, index) => {
          if (new Date().getFullYear() - new Date(val.time).getFullYear() >= 1) {
            return true;
          } else if (new Date().getMonth() - new Date(val.time).getMonth() >= 1) {
            return true;
          } else if (new Date().getDay() - new Date(val.time).getDay() >= 1) {
            return true;
          } else if (new Date().getHours() - new Date(val.time).getHours() >= 1) {
            return true;
          } else if (
            new Date().getMinutes() - new Date(val.time).getMinutes() >
            5
          ) {
            return true;
          } else {
            return false;
          }
        });
        localStorage.setItem("Details", JSON.stringify(newState));
        return newState;
      }
}
export default ForumReducer;