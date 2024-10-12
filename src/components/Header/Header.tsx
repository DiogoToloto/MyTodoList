import React from "react";
import styles from "./styles.module.scss";
import { StatsCards } from "../StatsCard/StatsCards";



export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <h1>MyTodo</h1>
                    <span>Bem-vindo, Diogo!</span>
                </div>
                <div>
                    <StatsCards
                    title="Total de tarefas"
                    value={5}
                    />
                    <StatsCards
                    title="Tarefas pendentes"
                    value={4}
                    />
                    <StatsCards
                    title="Tarefas concluidas"
                    value={1}
                    />
                </div>
            </div>
        </header>
    )
}