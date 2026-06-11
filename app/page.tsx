import ApproachSection from "./components/section/ApproachSection";
import ProjectSection from "./components/section/ProjectSection";
import WrapperPage from "./components/share/WrapperPage";

export default function Home() {
  return (
    <>
      <WrapperPage className="gap-12">
        <section className="w-full flex flex-col gap-4">
          <h1 className="font-mono text-main text-text-primary">
            Vladyslav Kurochka
          </h1>
          <p className="text-main text-text-tertiary leading-relaxed">
            Frontend Engineer based in Katowice, Poland. I build fast,
            interactive web products using React & TypeScript from B2B platforms
            to hackathon MVPs. I care about performance, clean UX, and shipping
            things that actually work. Currently open to full-time roles and
            freelend projects.
          </p>
          <p className="text-main text-text-tertiary">
            Technology is the tool the goal is always delivering meaningful
            business impact.
          </p>
          <p className="text-main text-text-tertiary">
            Feel free to connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/vladkurochka/"
              className="text-text-quaternary underline"
            >
              Linkedin
            </a>{" "}
            or explore my work on{" "}
            <a
              href="https://github.com/vla2oc"
              className="text-text-quaternary underline"
            >
              GitHub
            </a>
            .
          </p>
        </section>
        <ProjectSection />
        <ApproachSection />
      </WrapperPage>
    </>
  );
}
