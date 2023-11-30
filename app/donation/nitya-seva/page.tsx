import ComingSoon from '@/components/coming-soon';
import { Metadata } from 'next';

import NityaSevaForm from '@/components/forms/nitya-seva-form';
import PageHeader from '@/components/page-header';

export const metadata: Metadata = {
  title: 'Nitya Seva',
};

const NityaSeva = () => {
  return (
    <main>
      <PageHeader title="Niya Seva" />
      <div className="container mx-auto">
        {/* <NityaSevaForm /> */}
        <ComingSoon />
      </div>
    </main>
  );
};

export default NityaSeva;
