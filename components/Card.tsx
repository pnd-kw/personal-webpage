type Props = {
  title: string;
  image: string;
  description: string;
  techLogo: string[];
  url?: string;
};

const Card: React.FC<Props> = ({
  title,
  image,
  description,
  techLogo,
  url,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4">
      <div className="w-full md:w-5/6 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-full ">
          <div className="flex items-center justify-center">
            <img className="h-full object-cover" src={image} alt={title} />
          </div>
          <div>
            <div className="pb-2">
              <p className="text-xl font-bold">{title}</p>
            </div>
            <p className="pb-4">{description}</p>
            <div className="flex items-center">
              {techLogo.map((logo, index) => (
                <img
                  className="pr-2"
                  key={index}
                  src={logo}
                  alt={`Tech Logo ${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-items-end">
        <div className="ml-auto">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img className="w-36" src="/images/google-play-logo.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
