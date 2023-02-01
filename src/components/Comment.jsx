import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export function Comment (props) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/maykbrito.png' />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Juliano Ferrasso</strong>
                            <time title='1 de janeiro de 2023 às 11:45' dateTime='2023-30-01 11:45:00'>Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentario">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                        {props.content}
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20}/> 
                        Aplaudir <span>25</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}