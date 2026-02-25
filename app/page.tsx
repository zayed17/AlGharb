import type { Metadata } from 'next';
import Script from 'next/script';
import Banner from '../src/components/Banner';
import ServiceHome from '../src/components/ServiceHome';
import WhyChoose from '../src/components/WhyChoose';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Simplify your business with expert consulting: accounting, tax, supervision, and more.',
};

export default function HomePage() {
  return (
    <>
      <Script id="org-jsonld" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Al Gharb Management Consultants',
          url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
          logo: '/Algharb.png',
          sameAs: [
            'https://www.facebook.com/profile.php?id=61555492751458',
            'https://www.tiktok.com/@1agmcshj',
            'https://www.instagram.com/algharbmc/',
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Sharjah',
            addressCountry: 'AE',
            streetAddress: 'Al Mussalla',
          },
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+97165288822',
              contactType: 'customer service',
              areaServed: 'AE',
              availableLanguage: 'en',
            },
          ],
        })}
      </Script>
      <Banner />
      <ServiceHome />
      <WhyChoose />
    </>
  );
}
