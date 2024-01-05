import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className='min-h-screen flex flex-col gap-4 justify-center items-center bg-blue-500'>
      <Link href={'/blogPreviewCard'} className='text-white text-xl font-bold underline'>
        blogPreviewCard
      </Link>
      <Link href={'/faq-accordion-main'} className='text-white text-xl font-bold underline'>
        faq-accordion-main
      </Link>
      <Link href={'/newsletter-sign-up'} className='text-white text-xl font-bold underline'>
        newsletter-sign-up
      </Link>
    </main>
  )
}
