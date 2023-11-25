import { Hero, About, Features, Testimonial, CTA } from '../../components/Layout/home'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Features />
      <Testimonial />
      <CTA />
    </div>
  )
}
