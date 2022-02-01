import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Meta from '../components/meta'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Meta 
        title='Home Page'
        keywords=''
        description=''
      />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Hello World <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
      </div>
    </>
  )
}

export default Home
