import {useState} from "react";

function AddTask ({onAddTaskSubmit}) {
    const [title, setTitle] = useState ("");
    const [description, setDescription] = useState ("");
    return (
    <div className="info">
        <input type="text" placeholder="Digite o título da tarefa" className="box" value={title} onChange={(event) => setTitle(event.target.value)}></input>
        <input type="text" placeholder="Digite a descrição da tarefa" className="box2" value={description} onChange={(event) => setDescription(event.target.value)}></input>
        <button className="btn4" onClick={() => {
            if(!title.trim() || !description.trim()) {
                return alert("Preencha o título e a descrição da tarefa.");
            }
            onAddTaskSubmit(title, description); 
            setTitle("");
            setDescription("");}}>Adicionar
            </button>
    </div>
    );
}

export default AddTask