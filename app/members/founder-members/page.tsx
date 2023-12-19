import ComingSoon from '@/components/coming-soon';
import PageHeader from '@/components/page-header';

import founderMembers from '@/data/founder-members.json';

const FounderMembers = () => {
  //console.log(founderMembers, 'founder')
  return (
    <main className="py-8">
      <PageHeader title="Founder Members" />
      <ComingSoon />
    </main>
  );
};

export default FounderMembers;
