import React, { useEffect, useRef } from 'react';
import { FaPlay } from 'react-icons/fa';
import CTAButton from '@/components/CTAButton';

interface VideoSectionProps {
  videoSectionRef: React.RefObject<HTMLElement | null>;
  isVideoInView: boolean;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoSectionRef, isVideoInView }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // YouTube iframe API commands
    const postMessage = (command: string) => {
      iframe.contentWindow?.postMessage(
        `{"event":"command","func":"${command}","args":""}`,
        'https://www.youtube.com'
      );
    };

    // Add a small delay to ensure iframe is ready
    const timer = setTimeout(() => {
      if (isVideoInView) {
        // When video section is in view: only unmute (don't control play/pause)
        postMessage('unMute');
      } else {
        // When video section is not in view: only mute (don't control play/pause)
        postMessage('mute');
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [isVideoInView]);

  return (
    <section ref={videoSectionRef} className="relative py-20 px-4 bg-slate-800 overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900"></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 border border-teal-500/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border border-blue-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-20 w-8 h-8 bg-teal-500/10 rotate-12 animate-spin"></div>
        <div className="absolute top-32 right-32 w-12 h-12 border-2 border-purple-500/20 transform rotate-45"></div>
      </div>

      {/* Tech Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L20 20 L20 0 M20 20 L40 20 M20 20 L20 40" stroke="currentColor" strokeWidth="1" fill="none" className="text-teal-500"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video border border-slate-600">
          <iframe
            ref={iframeRef}
            className="w-full h-full"
            src="https://www.youtube.com/embed/diGpkv3thvg?enablejsapi=1&mute=1&loop=1&playlist=diGpkv3thvg&controls=1&autoplay=1"
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
      </div>
    </section>
  );
};

export default VideoSection;