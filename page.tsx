import type { Metadata } from 'next';
import { Container } from '@/components/common/container';
import { ContactForm } from '@/components/sections/contact-form';
import { SectionHeading } from '@/components/sections/section-heading';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Ashish Kumar Pal for frontend engineering and e-commerce platform work.'
};

export default function ContactPage() {
  return (
    <Container className="py-16">
      <SectionHeading title="Contact" subtitle="Let’s build fast, reliable, and conversion-focused web experiences." />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card-base">
          <h2 className="text-xl font-semibold">Reach out</h2>
          <p className="mt-3 text-muted">Email: ashishpal.rnd@gmail.com</p>
          <p className="mt-2 text-muted">Location:  Gurugram India</p>
        </div>
        <ContactForm />
      </div>
    </Container>
  );
}
