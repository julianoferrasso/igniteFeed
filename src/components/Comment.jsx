import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export function Comment ({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0)

    function handleNewLike() {
        setLikeCount(likeCount + 1)
    }

    function handleDeletarComentario() {
        onDeleteComment(content)
    }

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
                        <button onClick={handleDeletarComentario} title="Deletar comentario">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>

                <footer>
                    <button onClick={handleNewLike}>
                        <ThumbsUp size={20}/> 
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}