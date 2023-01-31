import {Comment} from './Comment'
import {Avatar} from './Avatar'

import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        src='https://github.com/julianoferrasso.png'                  
                    />

                    <div className={styles.authorInfo}>
                        <strong>Juliano Ferrasso</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='1 de janeiro de 2023 às 11:45' dateTime='2023-30-01 11:45:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera!</p>
                <p>Teste de post no react. Tesnatndo postagem . è um projeto novo</p>
                <p><a href="">link.do.site</a></p>
                <p><a href="">#teste</a> <a href="">#React</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe seu feedback...'
                />

                <footer>
                  <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>

    )
}