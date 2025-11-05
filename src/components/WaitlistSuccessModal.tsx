'use client';

import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import Image from 'next/image';

interface WaitlistSuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function WaitlistSuccessModal({ open, onOpenChange }: WaitlistSuccessModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md rounded-[20px] border border-white p-8 md:p-12 w-[90%] max-w-[638px] min-h-[644px] z-50 focus:outline-none flex items-center justify-center">
          <VisuallyHidden.Root>
            <Dialog.Title>Successfully joined waitlist</Dialog.Title>
          </VisuallyHidden.Root>

          {/* Close button */}
          <Dialog.Close className="absolute top-6 right-6 text-white hover:text-gray-200 transition">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Dialog.Close>

          <div className="flex flex-col items-center text-center">
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
              You're on the list 🎉
            </h2>

            {/* Description */}
            <p className="font-manrope font-normal text-[14px] md:text-[16px] text-white mb-8 max-w-[350px]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Thanks for joining OVU. We'll notify you as soon as we launch.
            </p>

            {/* Share button */}
            <button
              onClick={() => onOpenChange(false)}
              className="w-full max-w-[300px] bg-[#303030] text-white py-4 px-8 rounded-[15px] font-manrope font-medium text-[16px] hover:bg-[#303030]/90 transition cursor-pointer"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Share with friends
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
