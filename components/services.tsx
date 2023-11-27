import KitchenIcon from '@/app/icons/kitchen-icon';

const servicesData = [
  {
    title: 'Devotee Kitchen',
    icon: <KitchenIcon className="w-10 h-10" />,
  },
  {
    title: 'Goshala',
    icon: <KitchenIcon className="w-10 h-10" />,
  },
  {
    title: 'Bhagwat Gita Classes',
    icon: <KitchenIcon className="w-10 h-10" />,
  },
  {
    title: 'Life Membership',
    icon: <KitchenIcon className="w-10 h-10" />,
  },
];

const Services = () => {
  return (
    <section className=" py-16 bg-yellow-50">
      <div className="container mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 md:text-3xl ">
          Our main services
        </h2>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                {service.icon}
              </div>
              <div className="text-xs md:text-base text-center">{service.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
