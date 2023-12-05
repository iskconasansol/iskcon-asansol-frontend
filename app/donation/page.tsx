import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate Us',
};

const Donation = () => {
  return (
    <main className="">
      <PageHeader className='bg-yellow-50'>
        <div>
          <h1 className="text-xl md:text-3xl font-semibold text-gray-600">Donate Us</h1>
          <p>Your small contribution can make a big difference!</p>
        </div>
      </PageHeader>
      <div className="container mx-auto py-16 "></div>
    </main>
  );
};

export default Donation;
