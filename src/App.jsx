import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"

import './global.css'

// author: { avatar_url: "", name: "", role: """}
// publishedAt: Date
// content: ""

const posts = [
  {
      id: 1,
      author: {
          avatar_url: 'https://github.com/julianoferrasso.png',
          name: 'Juliano Ferrasso',
          role: 'Web Developer'
      },
      content: [
          {type: 'paragraph', content: 'Fala galera!'},
          {type: 'paragraph', content: 'Teste de post no react. Tesnatndo postagem . è um projeto novo'},
          {type: 'link', content: 'link.do.site'}
      ],
      publishedAt: new Date('2023-01-31 19:17:00')
  },
  {
      id: 2,
      author: {
          avatar_url: 'https://github.com/maykbrito.png',
          name: 'Mayk Brito',
          role: 'Educator'
      },
      content: [
          {type: 'paragraph', content: 'Fala galera!'},
          {type: 'paragraph', content: 'Teste de post no react. Tesnatndo postagem . è um projeto novo'},
          {type: 'link', content: 'pagi.git.hub'}
      ],
      publishedAt: new Date('2023-01-28 19:19:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          {posts.map( post => {
            return (
              <Post 
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            )
          })}
        </main>

      </div>
    </div>
  )
}

