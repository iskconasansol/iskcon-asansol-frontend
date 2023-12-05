import { Button } from '@/components/ui/button';
import KrishnaIcon from '../components/icons/krishna-icon';
import Link from 'next/link';

const NotFound = () => {
  return (
    <main className="py-24">
      <div className="container mx-auto flex justify-center items-center flex-col gap-4">
        <KrishnaIcon className="w-40 h-40" />
        <h1 className="text-3xl font-semibold text-gray-700 text-center">
          Hare Krishna! <br /> Dear devotee, we could not find the page you are
          looking for.
        </h1>

        <Link href="/" className="mt-4">
          <Button className="mt-4 bg-purple-600">Go back to home</Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
