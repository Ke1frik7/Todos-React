export const TodoItem = ({item}) => {
    function handleDelete(e){
        let parent = e.target.parentNode
        let parents = parent.parentNode
        parents.remove()
    }
    function handleEditClick(e){
        let id = e.target.dataset.id
        let textLocals = document.querySelector(".locals_text")
        if(id == item.id){
            textLocals.textContent = item.title
            console.log(true)
        }else{
            console.log(false)
        }
        window.localStorage.setItem("itemTodo", JSON.stringify(item))
        
    }
    return(
        <li className="p-1 mt-3 border rounded d-flex justify-content-between align-items-center">
            <input type="checkbox" />
            <span>{item.title}</span>
            <div>
                <button className="btn btn-success m-2" data-id={item.id} onClick={handleEditClick}>Edit</button>
                <button className="btn btn-danger m-2" onClick={handleDelete}>Delete</button>
            </div>
        </li>
    )
}