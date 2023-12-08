import ComingSoon from '@/components/coming-soon';
import PageHeader from '@/components/page-header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Activities',
};

const Activities = () => {
  return (
    <main>
      {/* <PageHeader title="Activities" /> */}
      <ComingSoon />
    </main>
  );
};

export default Activities;
