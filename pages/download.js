import Head from 'next/head'
import styles from '../styles/Download.module.css'

import Card from '../components/Card'

function Download() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Download | XStore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.cardList}>
            <Card name="Windows" src="https://i.picsum.photos/id/398/200/200.jpg?hmac=vfIjMAWfannZLe4HsdciIJxPkZh7v4XA2OpWglmHARg" />
            <Card name="Linux" src="https://i.picsum.photos/id/398/200/200.jpg?hmac=vfIjMAWfannZLe4HsdciIJxPkZh7v4XA2OpWglmHARg" />
            <Card name="Android" src="https://i.picsum.photos/id/398/200/200.jpg?hmac=vfIjMAWfannZLe4HsdciIJxPkZh7v4XA2OpWglmHARg" />
        </div>
      </main>
    </div>
  )
}

export default Download