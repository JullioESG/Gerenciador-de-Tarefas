import {useNavigate, useSearchParams} from "react-router-dom";


function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    return (
    <div className="page">
        <div className="Escopo">
            <div className="backbtn">
                <button className="btn5" onClick={() => navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                    </svg>
                </button>
                <h1 className="logo">Detalhes da Tarefa</h1>
            </div>
        </div>
    <div className="TD">
        <h2 className="tit">{title}</h2>
        <p className="desc">{description}</p>
    </div>
    </div>
    );

}

export default TaskPage;