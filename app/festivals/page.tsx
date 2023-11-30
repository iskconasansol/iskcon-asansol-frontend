import ComingSoon from '@/components/coming-soon';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Festivals',
};

const Festivals = () => {
  return (
    <main>
      <ComingSoon />
    </main>
  );
};

export default Festivals;
