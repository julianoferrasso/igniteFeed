import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          <Post 
            author="Juliano Ferrasso" 
            content="dfdhjh jglkdsjksdçiweo jkldfjlk fdsjldfjlk"
          />
          <Post 
            author="Gabriel Ferrasso Vaz da Silva" 
            content="dfsdfsfdf"
          />
        </main>

      </div>
    </div>
  )
}

