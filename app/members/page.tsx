import FounderMembers from '@/components/founder-members';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Members',
};

const Members = () => {
  return (
    <main>
      <PageHeader className="bg-teal-100 h-auto md:h-auto py-16">
        <div className="flex flex-col gap-2 px-4">
          <h1 className="text-xl md:text-3xl font-semibold text-slate-600">
            Embrace the Role of a Life Member Today!
          </h1>
          <Button className="mt-4 w-fit mx-auto">Become a Life Member</Button>
        </div>
      </PageHeader>

      <div className="py-16 container mx-auto">
        <div>
          <h2 className="text-2xl text-purple-700 font-semibold">
            Iskcon Asansol Life membership
          </h2>
          <div className="space-y-8 mt-4">
            <p>
              You now have the chance to be a founder member of ISKCON Asansol
              by joining one of our exclusive Founder Member schemes.
            </p>
            <p>
              {`Our society, guided by the teachings of our spiritual leader Srila
              Prabhupada, is dedicated to providing individuals with the chance
              to lead a life filled with happiness, robust health, peace of
              mind, and virtuous qualities through God consciousness. By
              becoming a founder member, you contribute to and support ISKCON's
              charitable endeavors that align with this sacred purpose.`}
            </p>

            <p>
              As Srila Prabhupada eloquently expressed,
              <blockquote className="font-semibold text-red-800 py-8">
                {`"It is the responsibility of every Indian to take up this
                cultural movement because this is India’s glory."`}
              </blockquote>{' '}
              The Founder Member program of ISKCON Asansol is designed to offer
              you precisely this opportunity.
            </p>
          </div>
          <h3 className="py-8 text-xl md:text-2xl font-semibold text-gray-700 mt-8">
            Our founder members
          </h3>
          <FounderMembers />

          <div className="w-full text-center">
            <Button className="mt-16 w-fit mx-auto">
              Become a Life Member
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Members;
