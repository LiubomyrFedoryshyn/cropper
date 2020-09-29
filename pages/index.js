import Head from 'next/head';
import ImageForm from '../components/imageForm.js';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cropper App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>Cropp Your Image</h2>
        <ImageForm />
      </main>
    </div>
  );
}
