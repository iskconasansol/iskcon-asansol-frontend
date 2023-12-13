import founderMembers from '@/data/founder-members.json';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type Props = {
  className?: string;
};

const FounderMembers: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn(className)}>
      <div className="grid md:grid-cols-4 gap-4 mt-4">
        {founderMembers.map((founder, index) => (
          <div
            className={`bg-white rounded-md p-4 shadow-md border`}
            key={index}
          >
            <div className={'h-40 rounded-md relative bg-teal-100'}>
              <Image
                fill={true}
                src={'/images/logo/iskcon-asansol-logo.svg'}
                alt="temple icon"
                className="object-contain p-8"
              />
            </div>

            <h4 className="mt-4 font-semibold">{founder.name}</h4>
            <p className="text-xs">{founder.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FounderMembers;
