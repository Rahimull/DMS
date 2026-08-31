import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import DoctorsPreview from "@/components/sections/DoctorsPreview";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import TestimonialsSection from "@/components/sections/TestimonialsSection";


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <WhyChooseUs />
      <DoctorsPreview />
      <AppointmentCTA />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
