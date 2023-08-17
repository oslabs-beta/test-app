import Link from "next/link";
import Image from 'next/image';

export default async function NavBar() {

  

  return (
    <nav>
      <div>
        <div>
          <Image src="/Neo.png" width={220} height={220} priority={true} alt="Neo Logo" />
          <div >
            <Link id="navHome" href="/">Home</Link>
            <Link id="navApp" href="/neo">App</Link>
            <Link id="navContact" href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}