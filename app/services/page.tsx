import type { Metadata } from 'next';
import CommonBanner from '../../src/components/CommonBanner';
import ServicesList from '../../src/components/SeriveList';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore our services: accounting, tax advisory, audit assistance, budgeting, software setup, and more.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <CommonBanner title="Service" url="/service.jpg" />
      <ServicesList />
    </>
  );
}

