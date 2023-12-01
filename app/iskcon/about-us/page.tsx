import ComingSoon from '@/components/coming-soon';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
};

const AboutUs = () => {
  return (
    <main>
      <ComingSoon />
    </main>
  );
};

export default AboutUs;
