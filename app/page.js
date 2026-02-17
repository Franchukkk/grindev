import Button from "@/components/Button/Button"
import HeroSection from "@/components/HeroSection/HeroSection"
import AboutUs from '@/components/AboutUs/AboutUs'
import ServicesSection from "@/components/ServicesSection/ServicesSection"
import Steps from "@/components/Steps/Steps"
import DiscussProject from "@/components/DiscussProject/DiscussProject"
import Cases from "@/components/Cases/Cases"
import DiscussPrice from "@/components/DiscussPrice/DiscussPrice"
import Advantages from "@/components/Advantages/Advantages"
import Banner from "@/components/Banner/Banner"
import FAQ from "@/components/FAQ/FAQ"
import Footer from "@/components/Footer/Footer" 

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutUs />
            <ServicesSection />
            <Steps />
            <DiscussProject />
            <Cases />
            <Advantages />
            <Banner />
            <FAQ />
            <DiscussPrice />
            <Footer />
        </>
    )
  }
  