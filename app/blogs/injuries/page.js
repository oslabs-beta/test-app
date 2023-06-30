import styles from '../articles.module.css'
import { revalidatePath } from 'next/cache';
import Image from 'next/image'
import Link from "next/link";



export default function Post() {
    const [ picture, title, content ] = [
        "https://media.tenor.com/0JXY6zR_1Y4AAAAM/breakdance-breakdancing.gif",
        "The #1 cause of injuries",
        "Improper technique",
     ]

    return (
        <div className={styles.postContainer}>
            <div className={styles.linkContainer}>
                <Link href="/">Previous</Link> | 
                <Link href="/">Back to Home</Link> | 
                <Link href="/blogs/power">Next</Link>
            </div>
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
            
        </div>
    )
}

