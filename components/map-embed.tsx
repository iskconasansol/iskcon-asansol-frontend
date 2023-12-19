import { cn } from '@/lib/utils';

type Props = {
  width?: string;
  height?: string;
  className?: string;
};

const MapEmbed: React.FC<Props> = ({
  width = 200,
  height = 200,
  className,
}) => {
  return (
    <div className={cn('w-full', className)}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.789119702014!2d86.93711967479102!3d23.719223589973577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f9ce3a42aff%3A0x82d1c85635838029!2sISKCON%20Asansol%20Jagannath%20Temple!5e0!3m2!1sen!2sin!4v1703010401955!5m2!1sen!2sin"
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
