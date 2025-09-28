"use client";
import { useState } from "react";
import { FaFacebookF, FaPhone, FaComments, FaTimes } from "react-icons/fa";

interface StickyContactButtonProps {
  facebookUrl?: string;
  lineUrl?: string;
  phoneNumber?: string;
}

const StickyContactButton: React.FC<StickyContactButtonProps> = ({
  facebookUrl = "https://web.facebook.com/messages/t/747858405082962",
  lineUrl = "https://line.me/ti/p/your-line-id",
  phoneNumber = "+66123456789"
}) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      {isContactOpen && (
        <div className="mb-4 space-y-3">
          {/* Facebook */}
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>

          {/* Line */}
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          >
            <FaComments className="w-5 h-5" />
          </a>

          {/* Phone */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          >
            <FaPhone className="w-5 h-5" />
          </a>
        </div>
      )}

      {/* Main Contact Button */}
      <button
        onClick={() => setIsContactOpen(!isContactOpen)}
        className="flex items-center justify-center w-14 h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        {isContactOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <FaComments className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default StickyContactButton;