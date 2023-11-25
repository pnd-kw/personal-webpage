import Button from "./Button";

type Props = {
  title: string;
  image: string;
  description: string;
  techLogo: string[];
};

const Card: React.FC<Props> = ({ title, image, description, techLogo }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4">
      <div className="flex items-center">
        <img className="h-1/5 object-cover" src={image} alt={title} />
        <div className="pl-8">
          <div className="pb-2">
            <p className="text-xl font-bold">{title}</p>
          </div>
          <p className="pb-4">{description}</p>
          <div className="flex items-center">
            {techLogo.map((logo, index) => (
              <img className="pr-2" key={index} src={logo} alt={`Tech Logo ${index}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-end justify-items-end mt-4">
        <Button size="large" color="sky" textColor="text-white" margin="end">
          TRY IT OUT
        </Button>
      </div>
    </div>
  );
};

export default Card;
