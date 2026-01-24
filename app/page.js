import Button from "@/components/Button/Button"
import HeroSection from "@/components/HeroSection/HeroSection"
import AboutUs from '@/components/AboutUs/AboutUs'
import ServicesSection from "@/components/ServicesSection/ServicesSection"
import Steps from "@/components/Steps/Steps"
import DiscussProject from "@/components/DiscussProject/DiscussProject"
import Cases from "@/components/Cases/Cases"

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutUs />
            <ServicesSection />
            <Steps />
            <DiscussProject />
            <Cases />
        </>
    )
  }
  