import { portofolio } from "@/data/portofolio";
import { projectSectionMap } from "./project_sections";
import Reveal from "../Reveal";
import { articles } from "@/data/articles";
import ArticleCard from "../ArticleCard";

const Content = () => {
  return (
    <main className="flex flex-col mx-2 md:mx-16 min-h-screen items-center justify-center">
      {portofolio.map((project, index) => {
        const Section = projectSectionMap[project.sectionType];

        return (
          <Reveal key={project.id} delay={index * 100}>
            <Section key={project.id} project={project} />
          </Reveal>
        );
      })}

      <section className="w-full mt-32">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Articles & Writing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {articles.map((article, index) => (
            <Reveal key={article.href} delay={index * 120}>
              <ArticleCard {...article} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Content;
