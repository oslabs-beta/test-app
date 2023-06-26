import Image from 'next/image'
import Link from "next/link";
import styles from './page.module.css'
import { revalidatePath } from 'next/cache';

const moves = ['Halo to Hollow'];

const Container = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.boxTitle}>Best Bboy Blog on the Web</h1>
    </div>
  )
}

const MoveBox = () => {
  async function addMove(data) {
    "use server"
    const move = data.get('move');
    moves.push(move);
    revalidatePath('/');
  }

  return (
    <div className={styles.moveBox}>
      <h1 className={styles.boxTitle}>Moves/Creations</h1>
      <ul>
        {moves.map((move, i) => (
          <li key={i}>{move}</li>
        ))}
      </ul>

      <form action={addMove}>
        <input
          type="text"
          name="move"
          className={styles.textBox}
        />
        <button
          type="submit"
          className={styles.button}
        >
          Add move
        </button>
      </form>
    </div>
  )
}

export default function Home() {
  return (
    <div className={styles.main}>
      <Container />
      <MoveBox />
    </div>
  );
}