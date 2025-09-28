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
    <section ref={videoSectionRef} className="py-20 px-4 bg-slate-800">
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
    </section>
  );
};

export default VideoSection;