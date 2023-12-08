import ComingSoon from '@/components/coming-soon';
import PageHeader from '@/components/page-header';
import Image from 'next/image';

const Philosophy = () => {
  return (
    <main>
      <PageHeader className="relative lg:h-[300px] bg-orange-200">
        <Image
          src="/images/prabhupada.svg"
          layout="fill"
          alt="prabhupada image old"
          className='object-contain'
        />
      </PageHeader>

      <article className="space-y-4 container mx-auto py-16">
        <h1 className="text-2xl md:text-4xl font-semibold text-purple-600">
          Philosophy
        </h1>

        <p>
          {` You may have encountered members of the Hare Krishna movement singing
          and dancing in public spaces, seeking donations for their books or
          magazines, or even come across them on TV or in newspapers. Perhaps
          you've wondered about their identity, their distinctive attire, their
          beliefs, and the reasons behind their constant singing. Who exactly is
          Krishna?`}
        </p>

        <p>
          {`To offer you a comprehensive understanding, we aim to delve into the
          Hare Krishna movement, shedding light on our identity. You might be
          surprised to learn that joining the Hare Krishna movement doesn't
          require adopting traditional clothing or altering one's hairstyle or
          religious affiliation. You'll come to realize that Krishna
          consciousness transcends mere religious practice—it's a spiritual,
          universal process with a time-tested foundation that leads to inner
          happiness, satisfaction, and heightened consciousness.`}
        </p>

        <p>
          {`The Hare Krishna movement serves the unique purpose of making
          spiritual reality and its associated culture accessible to the broader
          public. Engaging with a devotee, indulging in the spiritual cuisine at
          our restaurants, participating in temple Sunday festivals, reading our
          literature, or chanting Hare Krishna even once can bring about a shift
          in your consciousness. This spiritual transformation is key to
          enhancing the quality of life on our planet.`}
        </p>
      </article>
    </main>
  );
};

export default Philosophy;
