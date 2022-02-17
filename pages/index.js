import Head from 'next/head'
import Image from 'next/image'
import React,{ useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [number,setNumber]=useState(0);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
     <div style={{display : "flex" , flexDirection : "inline",marginInline:"10"}}>
     <button onclick="activateLasers()" style={{ backgroundColor: "black",
  color: "white",
  fontSize: "20px",
  padding: "10px 40px",
  borderRadius: 50,
  margin: "30px 0px",
  cursor: "pointer"}}>
  Increment
</button>

       <h1 style={{margin : 10,fontSize : 70}}>{number}</h1>
       <button onclick="activateLasers()" style={{ backgroundColor: "black",
  color: "white",
  fontSize: "20px",
  padding: "10px 40px",
  borderRadius: 50,
  margin: "30px 0px",
  cursor: "pointer"}}>
  Decreament
</button>
     </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
