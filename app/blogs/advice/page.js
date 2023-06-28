import styles from '../articles.module.css'
import { revalidatePath } from 'next/cache';
import Image from 'next/image'
import Link from "next/link";



export default function Post() {
    const [ picture, title, content ] = [
        "https://www.howcast.com/.image/t_share/MTU5NzA0MjYwMTY1MzEzNTU2/zf-how-to-freestyle-your-b-boy-dance-moves-promo-image.jpg",
        "Why your breaking stinks" ,
        "You don't practice enough and your style is wack",
     ]

    return (
        <div className={styles.postContainer}>
            <div className={styles.imgContainer}>
                <Image
                    src={picture}
                    alt="Dance practice"
                    width={669}
                    height={669} />
            </div>
                <h2 className={styles.blogTitle}>{title}</h2>
                <p className={styles.content}>{content}</p>
                Previous
                <Link href="/">Back to Home</Link>
                <Link href="/blogs/footwork">Next</Link>
        </div>
    )
}

