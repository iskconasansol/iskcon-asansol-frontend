import ChartBarIcon from '@/app/icons/chart-bar-icon';
import CurrencyRupeeIcon from '@/app/icons/currency-rupee-icon';
import HomeIcon from '@/app/icons/home-icon';
import PlusIcon from '@/app/icons/plus-icon';
import SparklesIcon from '@/app/icons/sparkles-icon';

const MobileNav = () => {
  return (
    <nav className="sticky bottom-0 md:hidden shadow-lg shadow-gray-500 drop-shadow-lg border-gray-100 border-t">
      <div className="flex justify-between items-center bg-white py-4 px-8 text-xs font-light">
        <a href="#" className="flex justify-center flex-col items-center">
          <HomeIcon />
          <span>Home</span>
        </a>

        <a href="#" className="flex justify-center flex-col items-center">
          <ChartBarIcon />
          <span>Projects</span>
        </a>
        <a href="#" className="flex justify-center flex-col items-center">
          <CurrencyRupeeIcon />
          <span>Donate</span>
        </a>
        <a href="#" className="flex justify-center flex-col items-center">
          <SparklesIcon />
          <span>Activities</span>
        </a>
        <a href="#" className="flex justify-center flex-col items-center">
          <PlusIcon />
          <span>More</span>
        </a>
      </div>
    </nav>
  );
};

export default MobileNav;
