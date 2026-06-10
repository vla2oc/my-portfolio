import PreviewCard from "../share/PreviewCard";
import { mockProjects } from "@/app/data/project";

export default function PreviewSection() {
  return (
    <section className="w-full opacity-85 text-white flex flex-col justify-center items-center">
      <div className="w-full">
        {/* Сетка Grid для 3 видео-карточек */}
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6 group">
          {mockProjects.map((project) => (
            <PreviewCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
