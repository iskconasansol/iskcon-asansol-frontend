import PageHeader from '@/components/page-header';
import Image from 'next/image';

const NityanandaTrayodasiPage = () => {
  return (
    <main>
      <PageHeader className="relative lg:h-[400px] bg-slate-100">
        <Image
          src={'/images/nityananda_trayodasi.jpg'}
          fill={true}
          alt="Nityananda Trayodasi"
          className="object-cover object-top"
        />

        <div className="absolute left-12 top-1/2 transform -translate-1/2">
          <h1 className="text-4xl font-semibold text-purple-900">
            Nityananda Trayodasi
          </h1>
          <p className="text-2xl font-semibold text-slate-800">
            22nd Feb, 2024
          </p>
        </div>
      </PageHeader>

      <article className="container my-16 space-y-8 text-slate-700">
        <p className="text-orange-600">
          In the divine realm of Kṛṣṇaloka, the Supreme Personality of Godhead
          manifests as Śrī Balarāma, the original attracting Deity known as
          Saṅkarṣaṇa. From Saṅkarṣaṇa emanates another expansion called
          Mahā-saṅkarṣaṇa, who graciously resides on one of the celestial
          Vaikuṇṭha planets.
        </p>

        <p>
          {`  As the dynamic force behind both creation and divine pastimes (lila),
          Nityananda Prabhu is recognized as the Lord's second body. He
          manifests as Balaram to Shri Krishna, Lakshman to Shri Ram, and
          Nityananda Prabhu to Chaitanya Mahaprabhu. All other forms and
          expansions of the Lord stem from this second divine manifestation.
          Nityananda Prabhu is the wellspring of Sankarshan, all Vishnus, and
          Ananta Shesha. In the realm of Vishnu tattva, He and Advaita Acharya
          hold a revered position alongside Chaitanya Mahaprabhu.`}
        </p>

        <p>
          In the earthly lila, Nityananda Prabhu precedes Chaitanya Mahaprabhu
          by over a decade, having appeared in the village of Ekachakra, West
          Bengal, India, around 1474. According to the Caitanya Caritamrita and
          other scriptures, He is declared to be the avatar of Lord Balarama,
          the direct expansion of the Supreme Personality of Godhead, Krishna.
        </p>

        <p>
          We extend a heartfelt invitation for the Nityananda Trayodasi
          celebration on the 22nd of February 2024. This year promises an
          abundance of joy, spontaneity, and ecstasy, evident from the
          overwhelming presence of devotees, pilgrims, and guests during the
          recent holidays, with more expected leading up to Gaura Purnima. We
          invite you to join us in dedicating your time, energy, and
          contributions to Lord Nityananda Prabhu, enhancing the festivities and
          seeking His divine mercy.
        </p>

        <p>
          {` “My dear Lord Nityananda, You exude perpetual joy in spiritual bliss.
          Recognizing Your ever-happy disposition, I approach You in my moments
          of unhappiness. May Your benevolent gaze bring happiness into my
          life.” Let us collectively strive for Lord Nityananda's mercy and
          revel in the pure love emanating from our devotion and offerings on
          His auspicious appearance day!`}
        </p>

        <section>
          <p className='font-semibold'>Hare Krishna,</p>
          <p>
            We cordially invite all of you,especially Life members,devotees and
            wellwishers of ISKCON from 7:30am to 2pm dated <span className='semi'>22nd feb 2024</span>.Please
            come with your family and get the blessing of Lord Nityananda with
            Prasadam and make success of this auspicious <span className='font-semibold'>LORD NITYANANDA BIRTH
            DAY FESTIVAL</span> AT ISKCON Asansol Temple.
          </p>

          <div>
            
          </div>
        </section>
      </article>
    </main>
  );
};

export default NityanandaTrayodasiPage;
