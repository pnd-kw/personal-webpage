import { Portofolio } from "@/types/portofolio";
import { ImageMedia } from "@/types/project";
import Image from "next/image";

type Props = {
  project: Portofolio;
};

const ErmSection = ({ project }: Props) => {
  const images =
    project.media?.filter((m): m is ImageMedia => m.type === "image") ?? [];
  return (
    <div className="flex flex-col w-full min-h-[80%] rounded-md shadow-md px-8 mb-20">
      <div>
        <h2 className="font-title text-2xl md:text-3xl font-bold py-2">
          {project.title} - <span className="text-lg md:text-2xl">{project.subtitle}</span>
        </h2>
      </div>
      <div className="md:grid md:grid-cols-[4fr_1.6fr] gap-10">
        <div className="flex w-full items-start justify-center p-2">
          <div>
            {images.map((image) => (
              <div key={image.alt} className="shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={50}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full p-4">
          <div className="text-sm md:text-md font-semibold mb-2">
            <p>Role: {project.role.title}</p>
          </div>
          <div className="border rounded-md border-stone-300 p-2 mb-4">
            <p className="text-xs md:text-sm mb-2">{project.description}</p>
            <p className="text-xs md:text-sm mb-2">Contributions :</p>
            <ul className="space-y-2">
              {project.contributions.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-sky-500 flex-shrink-0" />
                  <span className="text-xs md:text-sm">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((t) => (
              <div key={t.alt}>
                <Image
                  src={t.src}
                  alt={t.alt}
                  width={t.width}
                  height={t.height}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErmSection;
