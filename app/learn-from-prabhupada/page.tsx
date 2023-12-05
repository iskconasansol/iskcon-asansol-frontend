import PageHeader from '@/components/page-header';

const resourceLinks = [
  {
    title: 'Talks by Srila Prabhupada',
    summary: ` Srila Prabhupada is the founder of ISKCON. He is a spiritual master
  who has written over 70 books on the science of self-realization.
  These books are a treasure trove of wisdom and knowledge. His
  lectures are also a great way to learn about spirituality. You can
  listen to these talks and learn about the science of
  self-realization.`,
    links: [
      {
        name: 'Bhagavad Gita Lectures',
        link: 'https://prabhupadavani.org/transcriptions/?audio=Has+audio&type=Bhagavad-gita',
      },
      {
        name: 'Srimad Bhagavatam Lectures',
        link: 'https://prabhupadavani.org/transcriptions/?type=Srimad-Bhagavatam',
      },
      {
        name: `Caitanya Caritamrita Lectures`,
        link: 'https://prabhupadavani.org/transcriptions/?type=Srimad-Bhagavatam&type=Caitanya-caritamrta',
      },
    ],
  },
  {
    title: 'Ebooks',
    summary: `You can read books by Srila Prabhupada and other authors. These
  books are a great way to learn about spirituality. You can read
  these books and learn about the science of self-realization.`,
    links: [
      {
        name: `Srila Prabhupada's books`,
        link: 'https://vedabase.io/en/library/',
      },
    ],
  },
  {
    title: 'Videos',
    summary: `You can watch videos by Srila Prabhupada and other authors. These
  videos are a great way to learn about spirituality. You can watch
  these videos and learn about the science of self-realization.`,
    links: [
      {
        name: `Srimad Bhagavatam Lectures`,
        link: 'https://www.youtube.com/playlist?list=PLhQvESfduXoDOOKflAnLxIN61uhFyQfJ1',
      },
      {
        name: `Bhagavad Gita Lectures`,
        link: 'https://www.youtube.com/watch?v=7FskBI4NZtI&list=PL4iyYu76IW5MuGy3l2DlcOtmE8RqqKQOM',
      },
      {
        name: `Srila Prabhupada's Lectures`,
        link: 'https://www.youtube.com/watch?v=5ryplB_4Uqw&list=PL37837B352AA879BF',
      },
    ],
  },
  {
    title: 'Other Resources',
    summary: '',
    links: [
      {
        name: `Prabhupada's Letters`,
        link: 'https://vedabase.io/en/library/letters/',
      },
      {
        name: `Prabhupada's Transcripts`,
        link: 'https://vedabase.io/en/library/transcripts/',
      },
      {
        name: `All of Srila Prabhupada's works and other documents`,
        link: 'https://prabhupadabooks.com/',
      },
    ],
  },
];

const LearnFromPrabhupada = () => {
  return (
    <main>
      <PageHeader className="relative lg:h-[200px] bg-yellow-50">
        <h1 className="text-2xl font-semibold">Learn from Prabhupada!</h1>
      </PageHeader>

      <article className="container mx-auto py-16">
        <p className="mt-2">
          This is a special place for learning about spirituality. You can
          discover timeless wisdom through talks by Srila Prabhupada, read
          helpful ebooks, and watch heartwarming videos. We invite you to
          understand the spiritual path better and connect with divine
          teachings. Start a journey of positive change by exploring these
          valuable resources that will inspire, teach, and make your soul happy.
        </p>

        <div>
          {resourceLinks.map((resource, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold mt-8">{resource.title}</h2>
              <p className="mt-2">{resource.summary}</p>
              <ul className="flex flex-col gap-2 mt-4">
                {resource.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      target="_blank"
                      className="text-purple-700 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    </main>
  );
};

export default LearnFromPrabhupada;
