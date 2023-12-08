import PageHeader from '@/components/page-header';
import Image from 'next/image';

const Founder = () => {
  return (
    <main>
      <PageHeader className="relative lg:h-[300px] bg-slate-100">
        <Image
          src={'/images/prabhupada_smiling.svg'}
          fill={true}
          alt="Prabhupada image"
          className='object-contain'
        />
      </PageHeader>

      <article className="space-y-4 container mx-auto py-16">
        <h1 className="text-2xl md:text-4xl font-semibold text-purple-600">
          Founder
        </h1>

        <p>{`Born in 1896 in Calcutta, India, His Divine Grace A.C. Bhaktivedanta Swami Prabhupada had a transformative encounter with his spiritual mentor, Srila Bhaktisiddhanta Sarasvati Gosvami, in Calcutta in 1922. Srila Bhaktisiddhanta Sarasvati, a revered religious scholar and the founder of sixty-four Gaudiya Mathas (Vedic institutes), recognized the potential in this educated young man and persuaded him to devote his life to imparting Vedic knowledge. Srila Prabhupada formally became his disciple in 1933.
    `}</p>
        <p>
          {`During their initial meeting, Srila Bhaktisiddhanta Sarasvati urged Srila Prabhupada to disseminate Vedic wisdom in English. In the ensuing years, Srila Prabhupada wrote a commentary on the Bhagavad-gita, supported the Gaudiya Matha's endeavors, and, in 1944, initiated the publication of Back to Godhead, an English bi-weekly magazine. Operating single-handedly, Srila Prabhupada handled editing, manuscript typing, galley proof checks, and distribution. His disciples in the West now continue the magazine.
        `}
        </p>
        <p>{`In 1950, Srila Prabhupada embraced the vanaprastha (retired) order, withdrawing from married life to dedicate more time to study and writing. He relocated to the holy city of Vrndavana, residing in the historic temple of Radha-Damodara, where he immersed himself in profound study and writing. Taking sannyasa (renounced order of life) in 1959, Srila Prabhupada embarked on his magnum opus: a multivolume commentated translation of the eighteen-thousand-verse Srimad-Bhagavatam (Bhagavata Purana). Additionally, he authored "Easy Journey to Other Planets."
    `}</p>
        <p>
          {`After publishing three volumes of the Bhagavatam, Srila Prabhupada ventured to the United States in September 1965 to fulfill his spiritual master's mission. By November 14, 1977, when he passed away, he had overseen the growth of the International Society for Krishna Consciousness (ISKCON) into a global confederation with over one hundred asramas, schools, temples, institutes, and farm communities.
`}
        </p>
        <p>
          {`In 1972, Srila Prabhupada pioneered the introduction of the Vedic education system in the West, establishing the gurukula school in Dallas, Texas. His disciples subsequently founded similar schools worldwide.`}
        </p>

        <p>{`Srila Prabhupada's influence extended to the construction of large international cultural centers in India, notably at Sridhama Mayapur and Vrndavana. These centers serve as spiritual hubs and educational institutions. Additionally, he inaugurated the Krishna Balaram Mandir in Sri Vrindavana Dhama in 1975.`}</p>

        <p>{`However, Srila Prabhupada's most enduring legacy lies in his written works, highly esteemed for their authority, depth, and clarity. Translated into over fifty languages, his writings serve as textbooks in numerous college courses. The Bhaktivedanta Book Trust, established in 1972, has become the world's largest publisher of books in Indian religion and philosophy, preserving Srila Prabhupada's teachings.`}</p>

        <p>{`Despite his advanced age, Srila Prabhupada circled the globe fourteen times in just twelve years on extensive lecture tours across six continents. He continued prolific writing throughout this period, creating a comprehensive library of Vedic philosophy, religion, literature, and culture.`}</p>

        <p>
          {` Srila Prabhupada spent several significant years in Vrindavan before
          embarking on his mission to America, unveiling the splendor of
          Vrindavan-dham to the world through his travels and preaching.`}
        </p>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">
            Srila Prabhupada Chronology
          </h3>

          <ul>
            <li>
              <strong>1954:</strong> Left family, entered vanaprastha
            </li>
            <li>
              <strong>1956:</strong> Resided in Vrindavan, Vamsi Gopal temple
            </li>
            <li>
              <strong>1959:</strong> Began translating Srimad Bhagavatam in
              Delhi
            </li>
            <li>
              <strong>July:</strong> Moved upstairs to Radha-Damodara temple
            </li>
            <li>
              <strong>Sept. 17:</strong> Took sannyasa, renounced the order of
              life
            </li>
            <li>
              <strong>1960 Fall:</strong> Published first book, paperback Easy
              Journey to Other Planets
            </li>
            <li>
              <strong>1962 July:</strong> Moved into downstairs rooms at
              Radha-Damodara
            </li>
            <li>
              <strong>Sept.:</strong> Published Volume one, Srimad Bhagavatam in
              Delhi
            </li>
            <li>
              <strong>1963 December:</strong> Published volume two Srimad
              Bhagavatam
            </li>
            <li>
              <strong>1964 December:</strong> Published volume three Srimad
              Bhagavatam
            </li>
            <li>
              <strong>1965 August 13:</strong> Left Calcutta on Jaladuta bound
              for America
            </li>
            <li>
              <strong>1967:</strong> Returned to Radha-Damodara
            </li>
            <li>
              <strong>1971:</strong> Visited Radha-Damodara and Vrindavan with
              forty disciples
            </li>
            <li>
              <strong>1972 Kartik:</strong> At Radha-Damodara, delivered famous
              Nectar of Devotion Lectures
            </li>
            <li>
              <strong>1977:</strong> Entered the eternal lila of Radha and
              Krishna in Goloka Vrindavan
            </li>
          </ul>

          <p>(from: Mahanidhi Swami: Prabhupada in Radha-Damodara, BBT 2003)</p>
        </div>
      </article>
    </main>
  );
};

export default Founder;
