"use client";
// import Image from 'next/image'
// import styles from './page.module.css'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <h1>Home page</h1>
      <Link href="/about">Go to About page</Link> <br /> <br />
      <Link href="/Contact">Go to Contact page</Link>
      <br /> <br />
      <h1>Navigate Button</h1>
      <button
        onClick={() => {
          router.push("/register");
        }}
      >
        Navigate to Register page
      </button>
    </main>
  );
}
