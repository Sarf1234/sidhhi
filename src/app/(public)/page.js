export const revalidate = 60;
import CategoriesSection from '@/components/layout/CategoriesSection'
import FeaturedCategories from '@/components/layout/FeaturedCategories'
import Hero from '@/components/layout/Hero'
import HomePosts from '@/components/layout/HomePosts'
import { imagesLink, carouselContent } from '../../utils/seedData'
import HeroCarousel from '@/components/layout/HeroCarousel';
import TestimonialsCarousel from '@/components/layout/TestimonialsCarousel';
import FAQSection from '@/components/layout/FAQSection';

const page = () => {
  return (
    <div>
      <HeroCarousel images={imagesLink} contents={carouselContent} />

      <Hero />
       
      {/* <FeaturedCategories /> */}
      <HomePosts />
      <TestimonialsCarousel />
      <FAQSection />
      {/* <CategoriesSection /> */}
    </div>
  )
}

export default page
