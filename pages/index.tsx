import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello World <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}

export default Home
