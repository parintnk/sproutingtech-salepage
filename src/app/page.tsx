"use client";
import { FaRobot, FaLightbulb, FaChartBar, FaClock } from "react-icons/fa";
import { useRef } from "react";

// Sections
import PremiumBanner from '@/sections/PremiumBanner';
import HeroSection from '@/sections/HeroSection';
import VideoSection from '@/sections/VideoSection';
import CoursesSection from '@/sections/CoursesSection';
import FeaturesSection from '@/sections/FeaturesSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import BenefitsSection from '@/sections/BenefitsSection';
import FinalCTASection from '@/sections/FinalCTASection';

// Components
import StickyContactButton from '@/components/StickyContactButton';

// Hooks
import { useCountdownTimer, useStudentsCounter, useVideoIntersection } from '@/hooks/useCountdown';

// Constants
import { FEATURES_DATA } from '@/constants/data';

// Create features with icons
const FEATURES = FEATURES_DATA.map(feature => ({
  ...feature,
  icon: feature.iconName === "FaRobot" ? <FaRobot className="w-6 h-6" /> :
        feature.iconName === "FaLightbulb" ? <FaLightbulb className="w-6 h-6" /> :
        feature.iconName === "FaChartBar" ? <FaChartBar className="w-6 h-6" /> :
        feature.iconName === "FaClock" ? <FaClock className="w-6 h-6" /> :
        <FaRobot className="w-6 h-6" /> // fallback
}));


export default function Home() {
  const videoSectionRef = useRef<HTMLElement>(null);
  const timeLeft = useCountdownTimer();
  const studentsCount = useStudentsCounter();
  const isVideoInView = useVideoIntersection(videoSectionRef);

  return (
    <div className="min-h-screen bg-gray-900">
      <PremiumBanner timeLeft={timeLeft} />
      <HeroSection timeLeft={timeLeft} />
      <VideoSection videoSectionRef={videoSectionRef} isVideoInView={isVideoInView} />
      <CoursesSection />
      <FeaturesSection features={FEATURES} />
      <TestimonialsSection studentsCount={studentsCount} />
      <BenefitsSection />
      <FinalCTASection timeLeft={timeLeft} />

      {/* Sticky Contact Button */}
      <StickyContactButton
        facebookUrl="https://web.facebook.com/messages/t/747858405082962"
        lineUrl="https://line.me/ti/p/your-line-id"
        phoneNumber="+66123456789"
      />
    </div>
  );
}
