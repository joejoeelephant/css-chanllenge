export default function Home() {
  return (
    <main className='min-h-screen flex flex-col gap-4 justify-center items-center bg-blue-500'>
      <a href={'/blogPreviewCard'} className='text-white text-xl font-bold underline'>
        blogPreviewCard
      </a>
      <a href={'/faq-accordion-main'} className='text-white text-xl font-bold underline'>
        faq-accordion-main
      </a>
      <a href={'/newsletter-sign-up'} className='text-white text-xl font-bold underline'>
        newsletter-sign-up
      </a>
      <a href={'/multi-step-form'} className='text-white text-xl font-bold underline'>
        multi-step-form
      </a>
      <a href={'/interactive-comments'} className='text-white text-xl font-bold underline'>
        interactive-comments
      </a>
      <a href={'/ecommerce-product-page'} className='text-white text-xl font-bold underline'>
        ecommerce-product-page
      </a>
      <a href={'/todo-app-main'} className='text-white text-xl font-bold underline'>
        todo-app-main
      </a>
      <a href={'/easybank-landing'} className='text-white text-xl font-bold underline'>
        easybank-landing
      </a>
    </main>
  )
}
