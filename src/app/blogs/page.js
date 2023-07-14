import styles from '../page.module.css'
import { revalidatePath } from 'next/cache';
import Image from 'next/image'
import Link from "next/link";

const Posts = [];

const BlogPost = ({ picture, title, content }) => (
  <div className={styles.post}>
    <Image
      src={picture}
      alt="Dance practice"
      width={169}
      height={169} />
    <h2 className={styles.blogTitle}>{title}</h2>
    <p>{content}</p>
  </div>
)


const ArticlesDisplay = () => {

  return (
    <div className={styles.articlesDisplay}>
      <Link href="/blogs/injuries">
        <BlogPost
          title="The #1 cause of injuries"
          picture="https://media.tenor.com/0JXY6zR_1Y4AAAAM/breakdance-breakdancing.gif"
          content="Improper technique" /></Link>
      <Link href="/blogs/power">
        <BlogPost
          title="How to learn powermoves"
          picture="https://media.tenor.com/eTkFrMX23lUAAAAd/breakdance-dance.gif"
          content="It's all in the hips and core" /></Link>
      <Link href="/blogs/advice">
        <BlogPost
          title="Why your breaking stinks"
          picture="https://www.howcast.com/.image/t_share/MTU5NzA0MjYwMTY1MzEzNTU2/zf-how-to-freestyle-your-b-boy-dance-moves-promo-image.jpg"
          content="You don't practice enough and your style is wack" /></Link>
      <Link href="/blogs/footwork">
        <BlogPost
          title="How to practice footwork"
          picture="https://www.howcast.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_960/MTU5NzA0MjU3MjEwMjk1MzE2/f-b-boying-footwork-basics-promo-image.webp"
          content="Make shapes with your feet and more patterns" /></Link>
    </div>
  )
}

export default ArticlesDisplay;