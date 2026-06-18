import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Pain } from "@/components/sections/Pain";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { Turnaround } from "@/components/sections/Turnaround";
import { Pillars } from "@/components/sections/Pillars";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Authority } from "@/components/sections/Authority";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";
import { Offer } from "@/components/sections/Offer";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <Pain />
      <TestimonialsCarousel />
      <Turnaround />
      <Pillars />
      <BeforeAfter />
      <Authority />
      <TestimonialsGrid />
      <Offer />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
