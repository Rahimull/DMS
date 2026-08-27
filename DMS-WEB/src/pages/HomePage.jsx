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


// import AppointmentCTA from "../components/homeSection/AppointmentCTA";
// import HomeFeatures from "../components/homeSection/HomeFeatures";
// import HomeHero from "../components/homeSection/HomeHero";
// import ServicesPreview from "../components/homeSection/ServicePreview";
// import StatsSection from "../components/homeSection/StatsSection";
// import TestimonialsSection from "../components/homeSection/TestimonialsSection";





// const HomePage = () => {
//   return (
//     <main dir="rtl">

//       <HomeHero />

//       <HomeFeatures />

//       <ServicesPreview />

//       <StatsSection />

//       <TestimonialsSection />

//       <AppointmentCTA />

//     </main>
//   );
// };

// export default HomePage;