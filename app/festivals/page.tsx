import Festivals from '@/components/festivals';
import PageHeader from '@/components/page-header';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Festivals',
};

const FestivalsPage = () => {
  return (
    <main>
      <Festivals />
    </main>
  );
};

export default FestivalsPage;
