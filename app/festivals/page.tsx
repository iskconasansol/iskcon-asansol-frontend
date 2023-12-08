import Festivals from '@/components/festivals';
import PageHeader from '@/components/page-header';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Festivals',
};

const FestivalsPage = () => {
  return (
    <main>
      <PageHeader>
        <h1 className='md:text-4xl'>Festivals</h1>
      </PageHeader>

      <Festivals />
    </main>
  );
};

export default FestivalsPage;
