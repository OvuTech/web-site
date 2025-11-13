'use client';

import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import Image from 'next/image';
import { useState } from 'react';

interface WaitlistSuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isExistingUser?: boolean;
  type?: 'waitlist' | 'partnership';
}

export default function WaitlistSuccessModal({ open, onOpenChange, isExistingUser = false, type = 'waitlist' }: WaitlistSuccessModalProps) {
  const [shareButtonText, setShareButtonText] = useState('Share with friends');

  const isPartnership = type === 'partnership';

  const handleShare = async () => {
    const shareData = isPartnership
      ? {
          title: 'OVU Partnership',
          text: 'I just applied to partner with OVU - Nigeria\'s one-stop platform for flights and road trips! Join the growing network of transport operators.',
          url: window.location.origin,
        }
      : {
          title: 'Join OVU Waitlist',
          text: 'I just joined the waitlist for OVU - Nigeria\'s one-stop platform for flights and road trips! Join me and get early access when we launch.',
          url: window.location.origin,
        };

    // Check if Web Share API is supported (works great on mobile)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled share or error occurred
        console.log('Share cancelled or failed');
      }
    } else {
      // Fallback: Copy link to clipboard
      try {
        await navigator.clipboard.writeText(shareData.url);
        setShareButtonText('Link copied!');
        setTimeout(() => {
          setShareButtonText('Share with friends');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md rounded-[20px] border border-white p-8 md:p-12 w-[90%] max-w-[638px] min-h-[644px] z-50 focus:outline-none flex items-center justify-center">
          <VisuallyHidden.Root>
            <Dialog.Title>{isExistingUser ? 'Already on waitlist' : 'Successfully joined waitlist'}</Dialog.Title>
          </VisuallyHidden.Root>

          {/* Close button */}
          <Dialog.Close className="absolute top-6 right-6 text-white hover:text-gray-200 transition">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Dialog.Close>

          <div className="flex flex-col items-center text-center">
            {isExistingUser ? (
              <>
                {/* Existing User Icon - Checkmark in circle */}
                <div className="mb-6 relative">
                  <div className="w-[120px] h-[120px] rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="40" cy="40" r="35" fill="white" fillOpacity="0.3"/>
                      <path d="M25 40L35 50L55 30" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {/* Party popper emoji */}
                  <div className="absolute -bottom-2 -right-2 text-5xl">
                    🎉
                  </div>
                </div>

                {/* Heading */}
                <h2 className="font-manjari font-normal text-[32px] md:text-[40px] text-white mb-4" style={{ fontFamily: 'var(--font-manjari)' }}>
                  {isPartnership ? "We've received your application!" : "You're already on the list!"}
                </h2>

                {/* Description */}
                <p className="font-manrope font-normal text-[14px] md:text-[16px] text-white mb-8 max-w-[350px]" style={{ fontFamily: 'var(--font-manrope)' }}>
                  {isPartnership
                    ? "Great news! Your partnership application is already with us. Our team will review it and get back to you soon."
                    : "Great news! You're already signed up. We'll notify you as soon as we launch."
                  }
                </p>
              </>
            ) : (
              <>
                {/* Success Icon - Checklist GIF */}
                <div className="mb-6">
                  <Image
                    src="/checklist.gif"
                    alt="Success checklist"
                    width={120}
                    height={120}
                    className="w-[120px] h-[120px] object-contain"
                    unoptimized
                  />
                </div>

                {/* Heading with party emoji */}
                <h2 className="font-manjari font-normal text-[32px] md:text-[40px] text-white mb-4" style={{ fontFamily: 'var(--font-manjari)' }}>
                  {isPartnership ? "Application Submitted! 🎉" : "You're on the list 🎉"}
                </h2>

                {/* Description */}
                <p className="font-manrope font-normal text-[14px] md:text-[16px] text-white mb-8 max-w-[350px]" style={{ fontFamily: 'var(--font-manrope)' }}>
                  {isPartnership
                    ? "Thank you for your interest in partnering with OVU! Our team will review your application and reach out to you."
                    : "Thanks for joining OVU. We'll notify you as soon as we launch."
                  }
                </p>
              </>
            )}

            {/* Share button */}
            <button
              onClick={handleShare}
              className="w-full max-w-[300px] bg-[#303030] text-white py-4 px-8 rounded-[15px] font-manrope font-medium text-[16px] hover:bg-[#303030]/90 transition cursor-pointer"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              {shareButtonText}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
