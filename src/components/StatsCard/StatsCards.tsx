import React from "react";
import styles from "./styles.module.scss"

interface StatsCardsProps {
    title: string;
    value: number;
}

export const StatsCards: React.FC<StatsCardsProps> = ({title,value}) => {
    return (
        <article className={styles.stats_cards}>
            <h2>
               {title}
            </h2>
            <span>
                {value}
            </span>
        </article>
    )
}