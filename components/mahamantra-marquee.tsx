type Props = {
  className?: string;
};

const MahamantraMarquee: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-4">Hare Krishna</span>
          <span className="mx-4">Hare Krishna</span>
          <span className="mx-4">Krishna Krishna</span>
          <span className="mx-4">Hare Hare...</span>
          <span className="mx-4">Hare Rama</span>
          <span className="mx-4">Hare Rama</span>
          <span className="mx-4">Rama Rama</span>
          <span className="mx-4">Hare Hare...</span>
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
          <span className="mx-4">Hare Krishna</span>
          <span className="mx-4">Hare Krishna</span>
          <span className="mx-4">Krishna Krishna</span>
          <span className="mx-4">Hare Hare...</span>
          <span className="mx-4">Hare Rama</span>
          <span className="mx-4">Hare Rama</span>
          <span className="mx-4">Rama Rama</span>
          <span className="mx-4">Hare Hare...</span>
        </div>
      </div>
    </div>
  );
};

export default MahamantraMarquee;
