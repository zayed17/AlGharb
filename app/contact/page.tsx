import type { Metadata } from 'next';
import CommonBanner from '../../src/components/CommonBanner';
import ContactDetails from '../../src/components/ContactDetails';
import ContactMap from '../../src/components/ContactMap';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Al Gharb Management Consultants — contact details and location in Sharjah, UAE.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <CommonBanner title="Contact" url="/contactBanner.jpg" />
      <ContactDetails />
      <ContactMap />
    </>
  );
}

