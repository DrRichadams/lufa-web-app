import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>NAVIGATION</nav>
      <header>HEADER</header>
      <section>SECTION</section>
      <footer>FOOTER</footer>
    </main>
  )
}
