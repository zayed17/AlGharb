import type { Metadata } from 'next';
import CommonBanner from '../../src/components/CommonBanner';
import AboutUs from '../../src/components/AboutUs';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Al Gharb Management Consultants — dedicated to tailored business solutions in Sharjah, UAE.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <CommonBanner title="About" url="/AboutBanner.jpg" />
      <AboutUs />
    </>
  );
}

