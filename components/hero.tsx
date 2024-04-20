import Image from 'next/image';
import TempleTimeStatus from './temple-time-status';

const Hero = () => {
  return (
    <div className='h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] relative top-[-75px]'>
      <div className='relative w-full h-full'>
        <Image
          src={'/images/lord_radha_krishna.jpg'}
          className='object-cover object-top w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] '
          fill={true}
          alt={'lord jagannath vigraha'}
        ></Image>
        <div className='bg-gradient-to-b from-transparent to-black bg-opacity-90 absolute w-full h-full md:w-full bottom-0 px-8 py-4 md:py-0 rounded-md font-light'></div>

        <div className='absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-white text-center'>
          <div className=''>
            <h1 className='text-xl lg:text-3xl font-semibold text-white'>
              Welcome to
            </h1>
            <h1 className='text-2xl md:text-6xl font-bold text-yellow-400 shadow-lg'>
              Sri Sri Jagannath Mandir
            </h1>
          </div>
          <div className='mt-8'>
            <TempleTimeStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
