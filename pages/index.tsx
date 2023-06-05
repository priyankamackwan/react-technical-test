import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HomeStatic from '@/src/components/Home/HomeStatic'
import { trpc } from '@/utils/trpc'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const hello = trpc.hello.useQuery({ text: 'client' });
  console.log('trpc check', hello.data)
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <>
     <HomeStatic/>
    </>
  )
}
