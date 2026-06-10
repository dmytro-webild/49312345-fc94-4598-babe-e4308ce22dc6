"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSizeMediumTitles"
        background="circleGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Specializations",
          id: "#specializations",
        },
        {
          name: "Why Choose Us",
          id: "#expertise",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=1vf6h3"
      logoAlt="Dr AK Gupta Clinic Logo"
      brandName="Dr AK Gupta"
      button={{
        text: "Book Appointment Now",
        href: "#contact",
      }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardCarousel
      background={{
        variant: "plain",
      }}
      title="Expert Diabetes, Thyroid & Allergy Care"
      description="Dr AK Gupta brings 15 years of specialized medical expertise and board certifications to deliver personalized treatment. Schedule your consultation today with a trusted physician dedicated to your health."
      buttons={[
        {
          text: "Book Appointment Now",
          href: "#contact",
        },
        {
          text: "Call: Phone Number",
          href: "tel:+919145637465",
        },
      ]}
      buttonAnimation="slide-up"
      mediaItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EwKdgTuzaNWGcJkgAbIAav88Gm/uploaded-1781084661260-q21twasl.jpg?_wi=1",
          imageAlt: "Dr AK Gupta at his desk",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EwKdgTuzaNWGcJkgAbIAav88Gm/uploaded-1781084661260-gtwwwp3k.jpg",
          imageAlt: "Dr AK Gupta Clinic exterior branding",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EwKdgTuzaNWGcJkgAbIAav88Gm/uploaded-1781084661260-xnterulf.jpg",
          imageAlt: "Dr AK Gupta consulting a patient",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EwKdgTuzaNWGcJkgAbIAav88Gm/uploaded-1781084661260-iqehm70h.jpg",
          imageAlt: "Clinic services display",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-nurse-walking-hall_23-2148894864.jpg",
          imageAlt: "Modern doctor's office during patient consultation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/laboratory-supplies-medical-work_23-2149744724.jpg",
          imageAlt: "Medical laboratory with health checkup equipment",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Practice"
      tagAnimation="slide-up"
      title="Dedicated to Your Health and Well-being"
      description="Dr AK Gupta is a board-certified physician with 15 years of experience, specializing in comprehensive care for chronic conditions. Our patient-centered approach ensures personalized treatment plans tailored to your unique needs."
      subdescription="We prioritize clear communication, accessible care, and positive health outcomes for every patient. From diagnosis to long-term management, your health journey is our top priority."
      icon={Heart}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EwKdgTuzaNWGcJkgAbIAav88Gm/uploaded-1781084661260-q21twasl.jpg?_wi=2"
      imageAlt="Dr AK Gupta smiling confidently"
      mediaAnimation="opacity"
    />
  </div>

  <div id="specializations" data-section="specializations">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "diabetes",
          title: "Diabetes Management",
          subtitle: "Expert diagnosis and personalized treatment plans for Type 1 and Type 2 diabetes.",
          category: "Chronic Care",
          value: "Advanced Solutions",
        },
        {
          id: "thyroid",
          title: "Thyroid Disorder Treatment",
          subtitle: "Specialized care for hypothyroidism, hyperthyroidism, and other thyroid conditions.",
          category: "Endocrinology",
          value: "Hormone Balance",
        },
        {
          id: "allergy",
          title: "Allergy & Asthma Care",
          subtitle: "Effective strategies to manage allergies, asthma, and related respiratory issues.",
          category: "Immunology",
          value: "Breathing Relief",
        },
      ]}
      title="Comprehensive Care for Your Health Needs"
      description="Dr AK Gupta offers expert diagnosis and management for a range of conditions, ensuring you receive the highest standard of personalized medical care."
      tag="Our Specializations"
      tagAnimation="slide-up"
    />
  </div>

  <div id="expertise" data-section="expertise">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Commitment to Excellence and Patient Trust"
      tag="Why Choose Us"
      tagAnimation="slide-up"
      metrics={[
        {
          id: "experience",
          value: "15+",
          description: "Years of Specialized Experience",
        },
        {
          id: "certification",
          value: "Board Certified",
          description: "Physician in Internal Medicine",
        },
        {
          id: "care",
          value: "Personalized",
          description: "Treatment Plans for Every Patient",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Arjun Sharma",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-patient-talking-doctor_23-2149941500.jpg",
          imageAlt: "Arjun Sharma, satisfied patient",
        },
        {
          id: "2",
          name: "Priya Singh",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-home-enjoying-life_23-2149167741.jpg",
          imageAlt: "Priya Singh, satisfied patient",
        },
        {
          id: "3",
          name: "Rajesh Kumar",
          imageSrc: "http://img.b2bpic.net/free-photo/i-know-that-my-work-has-sense-because-i-can-help-people_329181-2199.jpg",
          imageAlt: "Rajesh Kumar, satisfied patient",
        },
        {
          id: "4",
          name: "Sneha Reddy",
          imageSrc: "http://img.b2bpic.net/free-photo/doctor-talking-with-her-patient_1139-318.jpg",
          imageAlt: "Sneha Reddy, satisfied patient",
        },
        {
          id: "5",
          name: "Vikram Patel",
          imageAlt: "Vikram Patel, satisfied patient",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-adult-woman-works-her-tablet-sits-with-notebook-kitchen-floor-home-studie_1258-183235.jpg",
        },
      ]}
      cardTitle="What Our Patients Say"
      cardTag="Hear from Our Patients"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "How do I book an appointment?",
          content: "Appointments can be booked easily through our website's 'Book Appointment Now' button or by calling our office directly.",
        },
        {
          id: "faq2",
          title: "What insurance plans do you accept?",
          content: "We accept a wide range of insurance plans. Please contact our office or check our 'Payment & Insurance' section for a detailed list.",
        },
        {
          id: "faq3",
          title: "What should I bring to my first appointment?",
          content: "Please bring your insurance card, a list of current medications, and any relevant medical records or previous test results.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Find answers to common questions about appointments, services, and what to expect during your visit."
      faqsAnimation="slide-up"
      textPosition="left"
      showCard={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Ready to take the next step towards better health? Schedule your consultation with Dr AK Gupta today."
      buttons={[
        {
          text: "Book Appointment Online",
          href: "#",
        },
        {
          text: "Call Us",
          href: "tel:+919145637465",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Dr AK Gupta"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
