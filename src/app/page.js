'use client'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main} >
      <h1>hello world</h1>
      <button 
       style={{backgroundColor:'blue', padding:'12px' , display:'inline-block' , color:'white'}}
      onClick={()=>{
        alert('hello')
      }}>on click</button>
    </main>
  )
}
