# OVU Landing Page

A modern, animated landing page for **OVU** - Nigeria's one-stop platform for flights and road trips. Built with Next.js 16, React 19, TypeScript, and Framer Motion.

## About OVU

OVU is a unified travel booking platform that allows users to search, book, and pay for buses and flights across Nigeria in one place. The platform aims to simplify travel booking with honest pricing, verified operators, and reliable service.

## Tech Stack

- **Framework**: [Next.js 16.0](https://nextjs.org) with App Router
- **React**: 19.2.0
- **TypeScript**: ^5
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Animations**: [Framer Motion 12.23](https://www.framer.com/motion/)
- **UI Components**: Radix UI
- **Font Loading**: Custom Google Fonts (Manrope, Poppins, Inter, Manjari)

## Features

### Animations
- **Loading State**: Custom page loader with animated OVU logo and bouncing dots
- **Header**: Slide-down animation on page load with staggered element transitions
- **Hero Section**: Sequential animations for flag, heading, subtext, and phone mockups
- **Scroll Animations**: All sections animate as they come into view using Framer Motion's `useInView` hook
- **Footer**: Fade-in animations when scrolling to bottom

### Sections
1. **Hero** - Animated Nigerian state names, compelling headline, and phone mockups
2. **How It Works** - 3-step process with alternating layouts (desktop) and stacked cards (mobile)
3. **Why OVU** - Feature cards with golden accent backgrounds and responsive layouts
4. **Your Trips** - Travel destination showcase
5. **Join Waitlist** - Email collection form
6. **FAQ** - Expandable accordion with custom styling
7. **Grow With OVU** - Partner/operator sign-up section
8. **Footer** - Social links, navigation, and copyright information

### Responsive Design
- Mobile-first approach with breakpoints at: `sm`, `md`, `lg`, `xl`, `2xl`
- Adaptive layouts for different screen sizes
- Touch-friendly interactive elements

## Getting Started

### Prerequisites
- Node.js 20+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd ovu-landing

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

The page auto-updates as you edit files. Start by modifying `src/app/page.tsx`.

### Build

Create an optimized production build:

```bash
npm run build
npm start
```

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## Project Structure

```
ovu-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with font configuration
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Header.tsx          # Navigation header with animations
│       ├── Hero.tsx            # Hero section with state animation
│       ├── HowItWorks.tsx      # 3-step process section
│       ├── WhyOVU.tsx          # Feature cards section
│       ├── YourTrips.tsx       # Travel destinations showcase
│       ├── JoinWaitlist.tsx    # Email waitlist form
│       ├── FAQ.tsx             # FAQ accordion
│       ├── GrowWithOVU.tsx     # Operator signup section
│       ├── Footer.tsx          # Footer with animations
│       └── PageLoader.tsx      # Initial page loading screen
├── public/                     # Static assets (images, icons, etc.)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## Key Dependencies

- **framer-motion**: Smooth animations and scroll-triggered effects
- **@radix-ui**: Accessible, unstyled UI components
- **tailwind-merge**: Utility for merging Tailwind CSS classes
- **lucide-react**: Icon library
- **class-variance-authority**: Type-safe variant styling

## Animation Details

### Timing
- **Page Loader**: 1.5 seconds duration
- **Header**: Starts animating at 1.6s (after loader)
- **Hero**: Animations begin at 1.6s with staggered delays
- **Scroll Sections**: Trigger when 10% of the section is visible

### Motion Principles
- Smooth easing functions for natural movement
- Staggered animations for visual hierarchy
- Once-only animations to prevent repetition on scroll
- Reduced motion support for accessibility

## SEO Optimization

- **Title**: "OVU - One Stop for Flights and Road Trips in Nigeria"
- **Description**: "Search, book, and pay for buses and flights, all in one place."
- **Viewport**: Responsive meta tags configured
- **Font Loading**: Optimized with `next/font`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Performance

- Server-side rendering (SSR) with Next.js
- Optimized images with Next.js Image component
- Font optimization with `next/font`
- CSS-in-JS with zero runtime overhead
- Lazy loading for non-critical resources

## Contributing

1. Create a feature branch
2. Make your changes
3. Run linting and build checks
4. Submit a pull request

## License

Private - © 2025 OVU Technologies. All rights reserved.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives)

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
