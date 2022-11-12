import "../Locals/locals.css"
export function Locals({json}){
    function handleLocals(){
        let localen = document.querySelector(".localen")
        localen.classList.toggle("block")
        console.log(json)
    }
    return(
        <div className="form-control w-25 m-2 d-flex justify-content-center">
            <div>
            <button onClick={handleLocals} className="btn btn-dark">Saqlanganlar</button>
            <div className= "localen w-100 mx-auto pt-2">
                <h2 className="locals_text">{json.title}</h2>
            </div>
        </div>
        </div>
    )
}