import React from 'react';
import { FaPlay } from 'react-icons/fa';
import CTAButton from '@/components/CTAButton';

interface VideoSectionProps {
  videoSectionRef: React.RefObject<HTMLElement | null>;
  isVideoInView: boolean;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoSectionRef, isVideoInView }) => {
  return (
    <section ref={videoSectionRef} className="py-20 px-4 bg-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video border border-slate-600">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/diGpkv3thvg?autoplay=1&mute=${isVideoInView ? '0' : '1'}&enablejsapi=1&loop=1&playlist=diGpkv3thvg`}
            title="AI Automation Course Preview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton size="large" href="/purchase">
            <FaPlay className="w-5 h-5" />
            {"Ready to Start? Enroll Now - ฿6,900"}
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;