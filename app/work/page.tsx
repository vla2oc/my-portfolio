import ProjectSection from "../components/section/ProjectSection";
import WorkSectionWrapper from "../components/section/work/WorkSectionWrapper";
import { BreadcrumbNav } from "../components/share/BreadcrumbNav";
import PreviewCard from "../components/share/PreviewCard";
import WrapperPage from "../components/share/WrapperPage";
import { getProjectByCategory } from "../data/project";

export default function WorkPage() {
  const commercialProject = getProjectByCategory("Work");
  const petProjects = getProjectByCategory("Pet Project");

  return (
    <>
      <WrapperPage className="gap-8">
        <BreadcrumbNav />
        <WorkSectionWrapper title="Exprience">
          <div className="w-full">
            {/* Сетка Grid для 3 видео-карточек */}
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6 group">
              {commercialProject.map((project) => (
                <PreviewCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </WorkSectionWrapper>
        <WorkSectionWrapper title="Pet Project">
          <div className="w-full">
            {/* Сетка Grid для 3 видео-карточек */}
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6 group">
              {petProjects.map((project) => (
                <PreviewCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </WorkSectionWrapper>
      </WrapperPage>
    </>
  );
}
