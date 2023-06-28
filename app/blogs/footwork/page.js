import styles from '../articles.module.css'
import { revalidatePath } from 'next/cache';
import Image from 'next/image'
import Link from "next/link";



export default function Post() {
    const [ picture, title, content ] = [
        "https://www.howcast.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_960/MTU5NzA0MjU3MjEwMjk1MzE2/f-b-boying-footwork-basics-promo-image.webp",
        "How to practice footwork",
        "Make shapes with your feet and more patterns",
     ]

    return (
        <div className={styles.postContainer}>
                <Image
                    src={picture}
                    alt="Dance practice"
                    width={669}
                    height={669} />
                <h2 className={styles.blogTitle}>{title}</h2>
                <p className={styles.content}>{content}</p>
                <Link href="/blogs/advice">Previous</Link>
                <Link href="/">Back to Home</Link>
                Next
        </div>
    )
}

