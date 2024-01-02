import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className='h-screen flex justify-center items-center bg-blue-500'>
      <Link href={'/blogPreviewCard'} className='text-white text-xl font-bold underline'>
        blogPreviewCard
      </Link>
    </main>
  )
}
