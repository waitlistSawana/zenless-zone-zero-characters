import MaxWidthWrapper from '@/components/wrappers/MaxWidthWrapper'

export default function LandingPageContent() {
  return (
    <MaxWidthWrapper className='md:mt-10 md:mb-10'>
      <div className='bg-zinc-200 shadow-md min-h-[20vh] rounded-3xl'>Content</div>
    </MaxWidthWrapper>
  )
}
