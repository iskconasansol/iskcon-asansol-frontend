import Festivals from '@/components/festivals';
import PageHeader from '@/components/page-header';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Festivals',
};

const FestivalsPage = () => {
  return (
    <main>
      <PageHeader className="bg-[url('/images/krishna_illustration.svg')] bg-cover md:h-[400px] bg-yellow-100"></PageHeader>

      <Festivals />
    </main>
  );
};

export default FestivalsPage;
