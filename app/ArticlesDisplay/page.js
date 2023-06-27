import styles from '../page.module.css'
import { revalidatePath } from 'next/cache';
import Image from 'next/image'

const Posts = [];

// const Container = () => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.boxTitle}>Best Bboy Blog on the Web</h1>
//     </div>
//   )
// }

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
  async function addMove(data) {
    "use server"
    const move = data.get('move');
    Posts.push(move);
    revalidatePath('/');
  }

  return (
    <div className={styles.articlesDisplay}>
        <BlogPost 
          title="Why your breaking stinks" 
          picture="https://www.howcast.com/.image/t_share/MTU5NzA0MjYwMTY1MzEzNTU2/zf-how-to-freestyle-your-b-boy-dance-moves-promo-image.jpg"
          content="You don't practice enough and your style is wack" />
        <BlogPost 
          title="How to practice footwork" 
          picture="https://www.howcast.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_960/MTU5NzA0MjU3MjEwMjk1MzE2/f-b-boying-footwork-basics-promo-image.webp"
          content="Make shapes with your feet and make patterns" />
    </div>
  )
}

export default ArticlesDisplay;