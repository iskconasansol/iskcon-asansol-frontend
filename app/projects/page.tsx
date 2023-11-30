import ComingSoon from '@/components/coming-soon';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

const Projects = () => {
  return (
    <main>
      <ComingSoon />
    </main>
  );
};

export default Projects;
