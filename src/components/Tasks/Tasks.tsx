import { FormEvent, useState } from "react";
import styles from "./styles.module.scss";

interface Task {
    title: string;
    done: boolean;
    id: number;
}

export const Tasks: React.FC = () => {

    const [taskTitle, setTaskTitle] = useState("");
    const [tasks, setTasks] = useState([] as Task[]);

    function handleSubmit(event: FormEvent){
        event.preventDefault()

        if(taskTitle.length < 5){
            alert("Não é possivel adicionar uma tarefa com menos de 5 caracteres.")
        }

        setTasks([...tasks, {id: new Date().getTime(),title: taskTitle, done: false}])
        setTaskTitle("")
    }

    return (
        <section className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="task-title">Adicionar Tarefa</label>
                    <input 
                    value={taskTitle}
                    onChange={(event) => 
                    setTaskTitle(event.target.value)
                    } 
                    type="text" 
                    id="task-title" 
                    placeholder="Titulo da Tarefa" />
                </div>
                <button type="submit" >Adicionar Tarefa</button>
            </form>

            <ul>
                {tasks.map(task => {
                    return(
                        <li key={task.id}>
                            <input type="checkbox" id={`taks-${task.id}`} />
                            <label htmlFor={`taks-${task.id}`}>{task.title}</label>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}