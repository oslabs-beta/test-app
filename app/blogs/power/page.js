import styles from '../articles.module.css'
import { revalidatePath } from 'next/cache';
import Image from 'next/image'
import Link from "next/link";



export default function Post() {
    const [ picture, title, content ] = [
        "https://media.tenor.com/eTkFrMX23lUAAAAd/breakdance-dance.gif",
        "How to learn power",
        "Stop being a bitch",
     ]

    return (
        <div className={styles.postContainer}>
            <div className={styles.imgContainer}>
                <Image
                    src={picture}
                    alt="Dance practice"
                    width={369}
                    height={369} />
            </div>
            <div>
                <h2 className={styles.blogTitle}>{title}</h2>
                <p className={styles.content}>{content}</p>
                </div>
            <div className={styles.linkContainer}>
                <Link href="/blogs/injuries">Previous</Link>
                <Link href="/">Back to Home</Link>
                <Link href="/blogs/advice">Next</Link>
            </div>
        </div>
    )
}

