import KrishnaIcon from '@/components/icons/krishna-icon';

const ComingSoon = () => {
  return (
    <section>
      <div className="container mx-auto py-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-semibold text-gray-700 md:text-5xl ">
            Coming Soon!
          </h1>

          <div className="mt-4 text-center flex flex-col items-center space-y-4">
            <KrishnaIcon className="w-40 h-40" />
            <p className="text-gray-500 mt-4 text-center">
              <span className="font-semibold text-xl">Hare Krishna!</span>
              <br /> Dear devotee, the page you are looking for is currently
              under construction. <br />
              Please visit again later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
