import Image from 'next/image';

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
            <Image className="object-cover w-[15vh] md:w-auto md:max-w-lg mx-auto" src={image} alt={title} width={200} height={200} />
          </div>
          <div>
            <div className="pb-2">
              <p className="text-xl font-bold">{title}</p>
            </div>
            <p className="pb-4">{description}</p>
            <div className="flex items-center">
              {techLogo.map((logo, index) => (
                <Image
                  className="pr-2"
                  key={index}
                  src={logo}
                  alt={`Tech Logo ${index}`}
                  width={30}
                  height={30}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-items-end">
        <div className="ml-auto">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Image className="w-36" src="images/google-play-logo.svg" alt="google play logo" width={150} height={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
