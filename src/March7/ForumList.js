import { useContext } from "react"
import ForumContext from "./ForumContext"
import ForumTopic from "./ForumTopic";
const ForumList = () => {
  const { state, dispatch } = useContext(ForumContext);

  return (
    <div className="ForumList"> 
    <h3>Topics</h3>
      {
        state.map((val, index) => {
          return (
            <div className="demo1">
            <p><strong>User:</strong>{val.user}</p>
              <ForumTopic topic={val.topic} />
              <p><strong>Time:</strong>{val.time}</p>
              <button onClick={() => {
                if (window.confirm("Are You  Want to Delete It sure?") == true) {
                  { dispatch({ type: 'deletetopic', index: index }) }
                }
              }
              } className="btn1">Delete</button>
            </div>
          )
        }
        )
      }
    </div>

  )
}
export default ForumList;