import Image from "next/image";

type Props = {
  title: string;
  href: string;
  thumbnail: string;
};

const ArticleCard = ({ title, href, thumbnail }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 w-[320px]"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          unoptimized
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-sky-600 transition">
          {title}
        </h3>
        <p className="text-xs text-stone-500 mt-2">Read on Medium</p>
      </div>
    </a>
  );
};

export default ArticleCard;
