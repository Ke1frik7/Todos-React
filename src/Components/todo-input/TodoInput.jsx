import {v4} from "uuid"
export const TodoInput = ({setArrayAddTodo}) => {
    function handleKey(e){
        if(e.keyCode === 13){
            
            let object = {
                id: v4(),
                title: e.target.value,
                isComplate: true
            }
            setArrayAddTodo((array) => [...array, object])
            e.target.value = null
        }
    }
    return(
        <input className="form-control w-25 mx-auto my-3" type="text" placeholder="Enter your todos" onKeyUp={handleKey} />
    )
}