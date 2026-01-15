import Button from "@/components/Button";
import { Portofolio } from "@/types/portofolio";
import Image from "next/image";

type Props = {
  project: Portofolio;
};

const HisSection = ({ project }: Props) => {
  const links = project.media?.filter((item) => item.type === "link") ?? [];
  return (
    <div className="flex w-full items-center md:h-[60vh] rounded-md shadow-md px-4 md:px-8 mb-20">
      <div className="flex flex-col md:grid md:grid-cols-[4fr_1.5fr] gap-10">
        <div className="flex flex-col w-full md:p-4">
          <h2 className="font-title text-2xl md:text-3xl font-bold py-2">
            {project.title} -{" "}
            <span className="text-lg md:text-2xl">{project.subtitle}</span>
          </h2>
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
        <div className="flex w-full items-center justify-center p-4 md:p-2">
          {links.map((l) => (
            <Button
              key={l.href}
              size="extra-large"
              width="large"
              textColor="text-white"
              fontWeight="font-bold"
              fontSize="text-lg"
              animation="animate-cta-pulse"
            >
              <a href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HisSection;
