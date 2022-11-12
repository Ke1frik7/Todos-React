import { TodoItem } from "../todo-item"
export const TodoList = ({array}) => {
    console.log('tredrtcdu');
    return(
        <ul className="w-50 mx-auto my-2">
            {array.map((item)=>(
                // console.log(item)
                <TodoItem item={item} key={item.id}/>
            ))}
        </ul>
    )
}