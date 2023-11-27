import TempleContributionForm from '@/components/forms/temple-contribution-form';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import NityaSevaForm from '@/components/forms/nitya-seva-form';

const NewTemple = () => {
  return (
    <main className="py-8">
      <div className="container mx-auto">
        <section className="grid md:grid-cols-3  gap-4">
          <div className="col-span-2 bg-purple-200 rounded-lg h-52 p-8">
            <p className="text-xl md:text-2xl font-semibold">
              {` Contribute towards construction of Lord Jagannath's temple`}
            </p>
            <p className="mt-2">
              The new temple will be a 5 storey building with a total area of
              25,000 sqft.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={'/images/new_temple.jpg'}
              fill={true}
              alt="new temple image"
              className="object-cover"
            />
          </div>
        </section>

        <Card className="md:w-[800px] shadow-md bg-orange-50 mx-auto mt-8">
          <CardHeader>
            <CardTitle>Contribute</CardTitle>
            <CardDescription>
              {`Contribute towards construction of Lord Jagannath's temple`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* <NityaSevaForm /> */}
            <TempleContributionForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default NewTemple;
