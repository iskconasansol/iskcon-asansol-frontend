import PageHeader from '@/components/page-header';
import Image from 'next/image';

const History = () => {
  return (
    <main>
      <PageHeader className="relative lg:h-[450px]">
        <Image
          src="/images/prabhupada_journey_to_usa.svg"
          layout="fill"
          className='object-cover object-top'
          alt="prabhupada image old"
        />
      </PageHeader>

      <article className="space-y-4 container mx-auto py-16">
        <h1 className="text-2xl md:text-4xl font-semibold text-purple-600">
          History
        </h1>

        <p>
          {`The establishment of the International Society for Krishna
          Consciousness (ISKCON) in 1966 in New York City marked a pivotal
          moment in the propagation of the transcendental message of Sri
          Chaitanya Mahaprabhu. This spiritual movement was initiated by His
          Divine Grace A.C. Bhaktivedanta Swami Prabhupada, a prominent figure
          within the Brahma Madhva Gaudiya Vaishnava Sampradaya—one of the four
          Vaishnava traditions. ISKCON's roots trace back to an authorized
          disciplic succession, where spiritual preceptors imparted the science
          of self-realization based on the teachings of the Bhagavad Gita and
          Srimad Bhagwatam.`}
        </p>

        <p>
          {`Sri Chaitanya Mahaprabhu, along with His brother Nityananda Prabhu and
          the Goswamis of Vrindavana, including Sanatana, Rupa, Jiva, Gopal
          Bhatta, Raghunatha Dasa, and Raghunatha Bhatta, played a pivotal role
          in codifying the precepts and practices that form the foundation of
          ISKCON. The Bhagavad Gita, considered the principal scripture of The
          Hare Krishna Movement, has an ancient lineage, with its teachings
          passed down through oral tradition for over 5000 years before being
          put into writing.`}
        </p>

        <p>
          {`The establishment of the International Society for Krishna
          Consciousness (ISKCON) in 1966 in New York City marked a pivotal
          moment in the propagation of the transcendental message of Sri
          Chaitanya Mahaprabhu. This spiritual movement was initiated by His
          Divine Grace A.C. Bhaktivedanta Swami Prabhupada, a prominent figure
          within the Brahma Madhva Gaudiya Vaishnava Sampradaya—one of the four
          Vaishnava traditions. ISKCON's roots trace back to an authorized
          disciplic succession, where spiritual preceptors imparted the science
          of self-realization based on the teachings of the Bhagavad Gita and
          Srimad Bhagwatam. Sri Chaitanya Mahaprabhu, along with His brother
          Nityananda Prabhu and the Goswamis of Vrindavana, including Sanatana,
          Rupa, Jiva, Gopal Bhatta, Raghunatha Dasa, and Raghunatha Bhatta,
          played a pivotal role in codifying the precepts and practices that
          form the foundation of ISKCON. The Bhagavad Gita, considered the
          principal scripture of The Hare Krishna Movement, has an ancient
          lineage, with its teachings passed down through oral tradition for
          over 5000 years before being put into writing. Sri Chaitanya's
          profound impact on fostering a massive devotional movement in India
          led to the compilation of numerous volumes on Krishna consciousness
          philosophy. In the 19th century, Bhaktivinoda Thakura, a distinguished
          Vaishnava theologian, brought Krishna consciousness to a contemporary
          audience by dispatching a book on the Teachings of Lord Caitanya to
          McGill University in Canada in 1896. Following in this preceptorial
          line, Bhaktivinoda Thakur's son, Bhaktisiddhanta Sarasvati Goswami,
          instructed Srila Prabhupada to spread Krishna consciousness among the
          English-speaking populace of the West.`}
        </p>

        <p>
          {`In adherence to this directive, Srila A.C. Bhaktivedanta Swami
          Prabhupada embarked on a daring journey across the Atlantic Ocean in
          1965, arriving in the USA. This marked the inception of The
          International Society for Krishna Consciousness (ISKCON), a
          spiritually significant movement aimed at fulfilling his guru's
          desire. Within a remarkably brief span of 11 years, ISKCON expanded to
          major cities worldwide, perpetuating the timeless teachings of Sri
          Chaitanya Mahaprabhu.`}
        </p>
      </article>
    </main>
  );
};

export default History;
